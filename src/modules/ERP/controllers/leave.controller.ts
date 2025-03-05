import { NextFunction, Request, Response } from "express";
import { LeaveAttributes, LeaveResponse } from "../../../../interface/ERP/leaveAttributes";
import { LeaveHandler } from "../handler/leave.handler";

class LeaveController{
    async createUserLeave(req: Request, res: Response, next: NextFunction) {
        try{
            const leaveAttributes: LeaveAttributes = req.body;
            const response =  await LeaveHandler.applyLeave(leaveAttributes);
            res.status(201).json({ status: response.status, message: response.message });
        }catch(error){
            next(new Error(`${error}`));
        }
    }
    async fetchLeaveTypes(req: Request, res: Response, next: NextFunction) {
        try{
            const response = await LeaveHandler.findAllLeavesType();
            res.status(200).json({ status: 200, message: "Successfully fetch leave types", data: response });
        }catch(error){
            next(new Error(`${error}`));
        }
    }
}
export default new LeaveController();
