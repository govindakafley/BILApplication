import { AuthRepository } from "../repository/auth.repository";
import { loginAttributes, TokenResponse, UserCreationAttributes } from "../../../../interface/auth/LoginAttributes"; 
import loginSchema from "../validators/authValidator";
import { ValidationError } from "yup";
import { ACCESS_TOKEN } from "../../../middleware/token/tokenAccess";
import errorHandler from "../../../middleware/errorHandler/commonErrorHandler";

export class AuthHandler {
    constructor(private readonly authService: AuthRepository) {}

    // This method handles the login logic and returns a token
    async createLogin(LoginAttributes: loginAttributes): Promise<TokenResponse | undefined> {
        try {
            // Validate the incoming login data using the login schema
            await loginSchema.validate(LoginAttributes, { abortEarly: false });

            // Start the login process in parallel to avoid blocking
            const loginResponse = this.authService.createLogin(LoginAttributes);
            
            // Wait for the login response asynchronously
            const response = await loginResponse;

            if (response && response.status === 200) {
                // If login is successful, execute further processing, like fetching user details
                const token = await ACCESS_TOKEN(response.data as unknown as UserCreationAttributes);
                return token;
               
            } else {
                // Handle the case where the response isn't successful (status !== 200)
                return undefined;
            }
        } catch (error: unknown) {
            throw errorHandler(error);  // Consolidated error handling
        }
    }

    // Placeholder for logout functionality, currently just returns true
    async logout(): Promise<boolean> {
        // You might want to add logic here to handle logout (e.g., invalidating tokens)
        return true;
    }
}
