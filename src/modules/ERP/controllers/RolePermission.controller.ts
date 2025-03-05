import { NextFunction, Request, Response } from "express";
import RolePermissionHandler from "../handler/RolePermission.handler";
import { RolePermissionCreationAttributes } from "../../../../interface/ERP/rolePermissionAttributes";

class ERPRolePermissionController {
  async finalRolePermission(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const result: Partial<RolePermissionCreationAttributes> =
        await RolePermissionHandler.finalRolePermission(req.body);
      res.status(200).json({
        status: 200,
        message: "Successfully fetch Role and Permission",
        data: result,
      });
    } catch (error) {
      if (error instanceof Error) {
        next(error);
      } else {
        next(new Error("An unexpected error occurred"));
      }
    }
  }
}
export default new ERPRolePermissionController();
