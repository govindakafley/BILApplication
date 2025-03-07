import { NextFunction, Request, Response } from "express";
import { LeaveAttributes,  } from "../../../../../../interface/ERP/leaveAttributes";
import { LeaveHandler } from "../../../handler/leaves/external/leave.handler";

class LeaveController{
    async createUserLeave(req: Request, res: Response, next: NextFunction):Promise<void> {
        try{
            const leaveAttributes: LeaveAttributes = req.body;
            const response =  await LeaveHandler.applyLeave(leaveAttributes);
            res.status(201).json({ status: response.status, message: response.message });
        }catch(error){
            next(new Error(`${error}`));
        }
    }
 
    async updateLeave(req:Request,res: Response, next: NextFunction): Promise<void> {
        try{
            const updateAttributes: LeaveAttributes = req.body;
            const response = await LeaveHandler.updateLeaves(updateAttributes);
            res.status(201).json({ status: 200, message: "Successfully updated The leave", data: response })
        }catch(error){
            next(new Error(`${error}`));
        }
        
    }
}
export default new LeaveController();
