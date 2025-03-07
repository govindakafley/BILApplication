import { loginCreationAttributes } from "../../../../../interface/auth/LoginAttributes";
import { RolePermissionCreationResponse } from "../../../../../interface/rolePermissionAttributes";
import { axiosError, DataBaseError, NotFoundError, UnauthorizedError } from "../../../../middleware/errorHandler/error.handler";
import { PPFAPI } from "../../../../middleware/externalAPI/providentFund/pf.api";
import apiClient from "../../../../utility/api";
class ProvidentFundExternalQueryRepository {
    static async findAllRoleAndPermission(
        loginAttributes: Partial<loginCreationAttributes>
    ): Promise<RolePermissionCreationResponse> {
        try {
            const  response  = await apiClient.post<{ data: RolePermissionCreationResponse }>(
                PPFAPI.roleAndPermission,
                loginAttributes
            );
            return {
             
                status: 200,
                message: "Role and permission data fetched successfully",
                roles: response.data?.data.roles,
                permissions: response.data?.data.permissions,
            };
        } catch (error) {
            if (error instanceof DataBaseError) {
                throw new DataBaseError(error.message);
            } 
            if (error instanceof axiosError) {
                throw new axiosError(`${error}`); // Ensure axiosError is a class
            }
            if (error instanceof UnauthorizedError) {
                throw new UnauthorizedError(error.message);
            }

            console.error("Unexpected error in findAllRoleAndPermission:", error);
            throw new Error("An unexpected error occurred while fetching role and permission data.");
        }
    }
}

export default  ProvidentFundExternalQueryRepository;
