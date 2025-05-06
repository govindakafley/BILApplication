import jwt, {JwtPayload} from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { TokenResponse, UserCreationAttributes } from '../../../interface/auth/LoginAttributes';
import { ForbiddenError, NotFoundError, UnauthorizedError } from '../errorHandler/error.handler';
import { ApiResponse } from '../../utility/responseHandler';
const secretKey = 'yourSecretKey';
const INACTIVITY_TIMEOUT = 1000000 * 1000; // 10 seconds
export const ACCESS_TOKEN = async (data: Partial<UserCreationAttributes>):Promise<TokenResponse>=>{
    const payload = {...data };

    const accessToken =  await jwt.sign(payload, secretKey, { expiresIn: '5000s' })
    const refreshToken = jwt.sign(payload, secretKey, { expiresIn: '60000s' });
    return { accessToken, refreshToken };
}

export const refreshTokenHandler = async (refreshToken: string) => {
    if (!refreshToken) {
      throw new ForbiddenError('Access denied. No token provided');
    }
    if (refreshToken.startsWith("Bearer ")) {
        refreshToken = refreshToken.slice(7);
    }

  try {
    const payload = jwt.verify(refreshToken, secretKey);
    const  {dataValues} = payload as JwtPayload
    
    const newAccessToken = jwt.sign(dataValues, secretKey, { expiresIn: '10000s' });
    const newRefreshToken = jwt.sign(dataValues, secretKey, { expiresIn: '60000s' });
      return { accessToken: newAccessToken, refreshToken: newRefreshToken };
  } catch (error) {
     throw new UnauthorizedError(`${error}`); 
  }
};


export const VERIFY_TOKEN = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      throw new ForbiddenError('Access denied. No token provided');
    }
    if (token.startsWith("Bearer ")) {
        token = token.slice(7);
    }
    try {
      const decoded = jwt.verify(token.replace(/"/g, ''), secretKey);
      
      (req as any).user = decoded;
      return next(); 
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        const refreshToken = token;
        if (!refreshToken) {
          throw new NotFoundError('Refresh token missing');
        }
      }

      throw new UnauthorizedError(`${error}`);
    }
  } catch (error: any) {
      return ApiResponse.error(res, error instanceof Error ? error.message : "An unexpected error occurred", error.statusCode);
  }
};


