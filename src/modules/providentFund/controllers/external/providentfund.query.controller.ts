import { NextFunction, Request, Response } from "express";
import ProvidentFundExternalQueryHandler from "../../handler/external/providentfund.query.handler";
import { RolePermissionCreationResponse } from "../../../../../interface/rolePermissionAttributes";
class ProvidentFundExternalQueryController {
    async fetchAllRoleAndPermission(req:Request,res:Response, next:NextFunction):Promise<void>{
        try{
            const response: RolePermissionCreationResponse = await ProvidentFundExternalQueryHandler.findAllRoleAndPermissionHandler(req.body);
            res.status(200).json(response);
        }catch(error){
            next(error)
        }
    }
}

export default new ProvidentFundExternalQueryController();