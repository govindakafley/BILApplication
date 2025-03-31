import { loginAttributes } from "../../../../../../interface/auth/LoginAttributes";
import { RolePermissionCreationAttributes } from "../../../../../../interface/rolePermissionAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import { CacheManager } from "../../../../../utility/cacheManager";
import { RolePermissionRepository } from "../../../repository/RolePermission.repository";
import rolePermissionSchema from "../../../validator/rolePermission.validator";
import { ValidationError } from "yup";

class RolePermissionHandler extends RolePermissionRepository {
  private cacheManager: CacheManager;
  constructor() {
    super();
    this.cacheManager = new CacheManager();
  }

  async finalRolePermission(
    username: Partial<loginAttributes>
  ): Promise<RolePermissionCreationAttributes> {
    try {
      await rolePermissionSchema.validate(username, { abortEarly: false });
      const employee_code = JSON.stringify(username.username );
      if (this.cacheManager.has(employee_code)) {
        return this.cacheManager.get<RolePermissionCreationAttributes>(
          employee_code
        )!;
      }

      const result = await this.findRoleAndPermission(username);
      const response: RolePermissionCreationAttributes = {
        role: result.role,
        permission: result.permission,
      };
      this.cacheManager.set(employee_code, response);

      return response;
    } catch (error) {
      throw errorHandler(error);  // Consolidated error handling
    }
  }
}

export default new RolePermissionHandler();
