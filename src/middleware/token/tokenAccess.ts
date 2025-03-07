import jwt, {JwtPayload} from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { TokenResponse, UserCreationAttributes } from '../../../interface/auth/LoginAttributes';
import { ForbiddenError, NotFoundError } from '../errorHandler/error.handler';
const secretKey = 'yourSecretKey';
const INACTIVITY_TIMEOUT = 1000000 * 1000; // 10 seconds
export const ACCESS_TOKEN = async (data: Partial<UserCreationAttributes>):Promise<TokenResponse>=>{
    const payload = {...data };

    const accessToken =  await jwt.sign(payload, secretKey, { expiresIn: '5000s' })
    const refreshToken = jwt.sign(payload, secretKey, { expiresIn: '6000s' });
    return { accessToken, refreshToken };
}

export const refreshTokenHandler = async (req: Request, res: Response) => {
  const refreshToken = req.cookies?.refreshToken || ((typeof req.headers['accessToken'] === 'string' ? req.headers['accessToken'].split(' ')[1] : undefined) ?? (typeof req.headers['refreshToken'] === 'string' ? req.headers['refreshToken'].split(' ')[1] : undefined));

  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token not provided' });
  }

  try {
    const payload = jwt.verify(refreshToken, secretKey);
    
    const newAccessToken = jwt.sign({ id: (payload as any)?.id, employee_code: (payload as any)?.employee_code, email: (payload as any)?.email, employee_id: (payload as any)?.employee_id  }, secretKey, { expiresIn: '50000s' });
    const newRefreshToken = jwt.sign({ id: (payload as any)?.id, employee_code: (payload as any)?.employee_code, email: (payload as any)?.email , employee_id: (payload as any)?.employee_id}, secretKey, { expiresIn: '60000s' });

    res.cookie('accessToken', newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: INACTIVITY_TIMEOUT, 
    });
    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: INACTIVITY_TIMEOUT, 
    });
    return res.status(200).json({ accessToken: newAccessToken, refreshToken: newRefreshToken }); 
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired refresh token' });
  }
};


export const VERIFY_TOKEN = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      throw new ForbiddenError('Access denied. No token provided');
    }
    if (token.startsWith("Bearer ")) {
        token = token.slice(7);
    }
    try {
      const decoded = jwt.verify(token, secretKey);
   
      (req as any).user = decoded;
      return next(); 
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        
        const refreshToken = token.split(' ')[1];
        if (!refreshToken) {
          throw new NotFoundError('Refresh token missing');
        }

        //  refreshTokenHandler(req, res);
      }

      throw error;
    }
  } catch (error) {
    next(error); 
  }
};


