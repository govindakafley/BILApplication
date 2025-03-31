import { NextFunction, Request, Response } from "express";
import { RolePermissionCreationAttributes } from "../../../../interface/rolePermissionAttributes";
import { ApiResponse } from "../../../utility/responseHandler";
import RolePermissionHandler from "../handler/leaves/external/RolePermission.handler";

class ERPRolePermissionController {
  async finalRolePermission(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const response = await RolePermissionHandler.finalRolePermission(req.body);
        return ApiResponse.success(res, "Successfully fetched Role and Permission", 200,  response);
      
    } catch (error: any) {
      return ApiResponse.error(res, error instanceof Error ? error.message : "An unexpected error occurred", error.statusCode);
    }
  }
}

export default new ERPRolePermissionController();
