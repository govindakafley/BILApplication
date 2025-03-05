import { AuthController } from "../../modules/auth/controller/auth.controller";
import { AuthHandler } from "../../modules/auth/handler/auth.handler";
import { AuthRepository } from "../../modules/auth/repository/auth.repository";


export const authRepository = new AuthRepository();
export const authHandler = new AuthHandler(authRepository);
export const authController = new AuthController(authHandler);

