import { AuthRepository } from "../repository/auth.repository";
import { loginAttributes, LoginResponse, TokenResponse, UserCreationAttributes } from "../../../../interface/auth/LoginAttributes"; // Adjust the import path as necessary
import loginSchema from "../validators/authValidator";
import { ValidationError } from "yup";
import { validateError } from "../../../middleware/errorHandler/error.handler";
import { ACCESS_TOKEN } from "../../../middleware/token/tokenAccess";

export class AuthHandler {
    constructor(private readonly authService: AuthRepository) {}
    async createLogin(LoginAttributes: loginAttributes) : Promise<TokenResponse | undefined> {
     try{
        await loginSchema.validate(LoginAttributes, { abortEarly: false });
        const response  = await this.authService.createLogin(LoginAttributes);
        if(response && response.status === 200){
            const responseData = await this.authService.execute(response.data as unknown as UserCreationAttributes);
            const token = await ACCESS_TOKEN(responseData);
            return token;
        } else {
            return undefined;
        }        
     } catch(error: unknown) {
       if (error instanceof ValidationError){
        throw new validateError(`${error.errors}`);
       }
       throw new Error('An unexpected error occurred');
     }
    }
    async logout(): Promise<boolean> {
        return true;
    }
}
