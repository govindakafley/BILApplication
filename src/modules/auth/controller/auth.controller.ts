import { Request, Response, NextFunction } from 'express'; // Import Request and Response
import { loginAttributes, TokenResponse } from "../../../../interface/auth/LoginAttributes";
import {AuthHandler} from '../handler/auth.handler';
export class AuthController {
   
    constructor(private readonly authHandler: AuthHandler) {}

      async createLogin(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const loginAttribute: loginAttributes = req.body;
            const response: TokenResponse | undefined = await this.authHandler.createLogin(loginAttribute);
            // res.cookie('accessToken', response?.accessToken,  { httpOnly: true, secure: true, sameSite: 'strict', maxAge: 3600000 });
            // res.cookie('refreshToken', response?.refreshToken,  { httpOnly: true, secure: true, sameSite: 'strict', maxAge: 3600000 });
            res.status(200).json({status: 200, message: 'Login successful', accessToken: response?.accessToken, refreshToken: response?.refreshToken });
        } catch (error: unknown) {
            if (error instanceof Error) {
                next(error); 
            } else {
                next(new Error('An unexpected error occurred')); 
            }
        }
    }
    async logout(req: Request, res: Response): Promise<Response> {
        try {
            res.clearCookie("accessToken", { httpOnly: true, secure: true, sameSite: "strict" });
            res.clearCookie("refreshToken", { httpOnly: true, secure: true, sameSite: "strict" });

            const response = await this.authHandler.logout();
            
            return res.status(200).json({ message: "User Logout Successfully",status: 200, isLoggedIn: response });
        } catch (error) {
            return res.status(500).json({ error: "Failed to logout", status: 500, isLoggedIn: true });
        }
    }
}