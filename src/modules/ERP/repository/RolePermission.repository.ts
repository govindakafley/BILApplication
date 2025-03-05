import {
  loginAttributes,
  UserCreationAttributes,
} from "../../../../interface/auth/LoginAttributes";
import { RolePermissionCreationAttributes } from "../../../../interface/ERP/rolePermissionAttributes";
import {
  axiosError,
  DataBaseError,
  NotFoundError,
} from "../../../middleware/errorHandler/error.handler";
import { ERPAPI } from "../../../middleware/externalAPI/ERP/erp.api";
import apiClient from "../../../utility/api";

export class RolePermissionRepository {
  async findRoleAndPermission(
    username: Partial<loginAttributes>
  ): Promise<RolePermissionCreationAttributes> {
    try {
      const response = await apiClient.post<{
        data: RolePermissionCreationAttributes;
      }>(ERPAPI.roleAndPermission, username);
      const data = response.data;
      const rolePermissionData: RolePermissionCreationAttributes =
        data?.data || {};
      return rolePermissionData;
    } catch (error) {
      if (error instanceof axiosError) {
        const errorMessage =
          error?.response?.message || error?.message || "Unknown error";
        throw new axiosError(errorMessage);
      } else if (error instanceof DataBaseError) {
        throw new DataBaseError(
          "Database error occurred while processing login"
        );
      } else if (error instanceof NotFoundError) {
        throw new NotFoundError("User not found");
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  }
}
