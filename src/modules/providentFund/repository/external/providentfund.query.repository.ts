import { loginCreationAttributes } from "../../../../../interface/auth/LoginAttributes";
import { RolePermissionCreationResponse } from "../../../../../interface/rolePermissionAttributes";
import errorHandler from "../../../../middleware/errorHandler/commonErrorHandler";
import {
  AxiosError,
  DataBaseError,
  NotFoundError,
  UnauthorizedError,
} from "../../../../middleware/errorHandler/error.handler";
import { PPFAPI } from "../../../../middleware/externalAPI/providentFund/pf.api";
import apiClient from "../../../../utility/api";
class ProvidentFundExternalQueryRepository {
  static async findAllRoleAndPermission(
    loginAttributes: Partial<loginCreationAttributes>
  ): Promise<RolePermissionCreationResponse> {
    try {
      const response = await apiClient.post<{
        data: RolePermissionCreationResponse;
      }>(PPFAPI.roleAndPermission, loginAttributes);
      return {
        status: 200,
        message: "Role and permission data fetched successfully",
        roles: response.data?.data.roles,
        permissions: response.data?.data.permissions,
      };
    } catch (error) {
      throw errorHandler(error);  // Consolidated error handling

    }
  }
}

export default ProvidentFundExternalQueryRepository;
