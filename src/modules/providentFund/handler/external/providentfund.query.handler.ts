import { ValidationError } from "sequelize";
import { loginCreationAttributes } from "../../../../../interface/auth/LoginAttributes";
import { RolePermissionCreationResponse } from "../../../../../interface/rolePermissionAttributes";
import { NotFoundError, UnauthorizedError, validateError } from "../../../../middleware/errorHandler/error.handler";
import rolePermissionSchema from "../../validator/validateRoleAndPermission";
import ProvidentFundExternalQueryRepository from "../../repository/external/providentfund.query.repository";

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
            if (error instanceof ValidationError) {
                throw new validateError(`Validation failed: ${error.message}`);
            }
            throw new NotFoundError(`${error}`);
        }
    }
}

export default new  ProvidentFundExternalQueryHandler();
