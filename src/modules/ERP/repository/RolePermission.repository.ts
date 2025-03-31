// src/repositories/RolePermissionRepository.ts


import { RolePermissionCreationAttributes } from "../../../../interface/rolePermissionAttributes";
import { loginAttributes } from "../../../../interface/auth/LoginAttributes";
import apiClient from "../../../utility/api";
import { ERPAPI } from "../../../middleware/externalAPI/ERP/erp.api";
import  errorHandler from "../../../middleware/errorHandler/commonErrorHandler";
export class RolePermissionRepository {
  async findRoleAndPermission(username: Partial<loginAttributes>): Promise<RolePermissionCreationAttributes> {
    try {
      const data = await apiClient.post<{ data: RolePermissionCreationAttributes }>(ERPAPI.roleAndPermission, username);
      return data?.data.data || {};  // Simplified return logic
    } catch (error) {
      throw errorHandler(error);  // Consolidated error handling
    }
  }
}
