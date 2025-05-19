import { NextFunction, Request, Response } from "express";
import { ForbiddenError } from "../../middleware/errorHandler/error.handler";
import RolePermissionHandler from "../../modules/ERP/handler/leaves/external/RolePermission.handler";
import errorHandler from "../../middleware/errorHandler/commonErrorHandler";
import { ApiResponse } from "../responseHandler";

export const hasPermission = (requiredPermission: string) => 
  async (req: Request, res: Response, next: NextFunction):Promise<any> => {
    try {
      const  permission  = await RolePermissionHandler.finalRolePermission(req.body);

      if (permission.permission && Array.isArray(permission.permission) && permission.permission.includes(requiredPermission)) {
        return next();
      }
      return ApiResponse.error(res, "Permission Denied to access the user", 403);
      
    } catch (error: any) {
      return ApiResponse.error(res, error instanceof Error ? error.message : "An unexpected error occurred", 403);

   }
  };