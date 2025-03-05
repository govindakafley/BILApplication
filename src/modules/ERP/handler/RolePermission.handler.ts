import { loginAttributes } from "../../../../interface/auth/LoginAttributes";
import { RolePermissionCreationAttributes } from "../../../../interface/ERP/rolePermissionAttributes";
import { validateError } from "../../../middleware/errorHandler/error.handler";
import { RolePermissionRepository } from "../repository/RolePermission.repository";
import rolePermissionSchema from "../validator/rolePermission.validator";
import { ValidationError } from "yup";

class RolePermissionHandler extends RolePermissionRepository {
  constructor() {
    super();
  }

  async finalRolePermission(username: Partial<loginAttributes>): Promise<RolePermissionCreationAttributes> {
    try {
      await rolePermissionSchema.validate(username, { abortEarly: false });
      const result = await this.findRoleAndPermission(username);
      const response: RolePermissionCreationAttributes = {
        role: result.role,
        permission: result.permission,
      };
      return response;
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new validateError(`${error.errors}`);
      }
      throw new Error("An unexpected error occurred");
    }
  }
}

export default new RolePermissionHandler();
