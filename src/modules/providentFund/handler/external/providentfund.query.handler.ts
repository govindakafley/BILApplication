import { loginCreationAttributes } from "../../../../../interface/auth/LoginAttributes";
import { RolePermissionCreationResponse } from "../../../../../interface/rolePermissionAttributes";
import { UnauthorizedError } from "../../../../middleware/errorHandler/error.handler";
import ProvidentFundExternalQueryRepository from "../../repository/external/providentfund.query.repository";
import errorHandler from "../../../../middleware/errorHandler/commonErrorHandler";
import rolePermissionSchema from "../../validator/validateRoleAndPermission";

class ProvidentFundExternalQueryHandler extends ProvidentFundExternalQueryRepository {
     async findAllRoleAndPermissionHandler(
        rolePermissionAttributes: Partial<loginCreationAttributes>
    ): Promise<RolePermissionCreationResponse> {
        try {
            await rolePermissionSchema.validate(rolePermissionAttributes);
            
            const response  =  await ProvidentFundExternalQueryRepository.findAllRoleAndPermission(rolePermissionAttributes);
            if(response.roles?.length === 0 || response.permissions?.length === 0){
                throw new UnauthorizedError("Unauthorized access");
            }
            return {
                roles: response.roles, 
                permissions: response.permissions,
                status: 200,
                message: "Role and permission data fetched successfully",
            };    
        } catch (error) {
            throw errorHandler(error);  // Consolidated error handling

        }
    }
}

export default new  ProvidentFundExternalQueryHandler();
