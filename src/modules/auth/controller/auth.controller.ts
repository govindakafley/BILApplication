import { Request, Response, NextFunction } from 'express';
import { loginAttributes, TokenResponse } from "../../../../interface/auth/LoginAttributes";
import { AuthHandler } from '../handler/auth.handler';
import { refreshTokenHandler } from '../../../middleware/token/tokenAccess';
import { ApiResponse } from '../../../utility/responseHandler';

export class AuthController {
   
    constructor(private readonly authHandler: AuthHandler) {}

    async createLogin(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const loginAttribute: loginAttributes = req.body;
            const response: TokenResponse | undefined = await this.authHandler.createLogin(loginAttribute);

            if (response) {
                return ApiResponse.success(res, 'Login successful',200, { 
                    accessToken: response?.accessToken, 
                    refreshToken: response?.refreshToken 
                });
            }
            return ApiResponse.error(res, 'Invalid login credentials', 401);
        } catch (error: any) {
            return ApiResponse.error(res, error instanceof Error ? error.message : "An unexpected error occurred", error.statusCode);
        }
    }

    // Refresh token method
    async refreshToken(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const refreshToken = req.headers.authorization as string;
            const response = await refreshTokenHandler(refreshToken);

            if (response) {
                return ApiResponse.success(res, 'Token Refreshed Successfully',200, { 
                    accessToken: response.accessToken, 
                    refreshToken: response.refreshToken 
                });
            }

            return ApiResponse.error(res, 'Failed to refresh token', 400);
        } catch (error: unknown) {
            next(error instanceof Error ? error : new Error('An unexpected error occurred'));
        }
    }

    // Logout method
    async logout(req: Request, res: Response): Promise<Response> {
        try {
            // Clear cookies
            res.clearCookie("accessToken", { httpOnly: true, secure: true, sameSite: "strict" });
            res.clearCookie("refreshToken", { httpOnly: true, secure: true, sameSite: "strict" });

            const response = await this.authHandler.logout();

            if (response) {
                return ApiResponse.success(res, 'User Logout Successfully',200,{response});
            }

            return ApiResponse.error(res, 'Failed to log out', 500);
        } catch (error: unknown) {
            return ApiResponse.error(res, 'An unexpected error occurred', 500);
        }
    }
}
