import { NextFunction, Request, Response } from "express";
import { LeaveQueryResponse } from "../../../../../../interface/ERP/leaveAttributes";
import LeaveQueryHandler from "../../../handler/leaves/external/leave.query.handler";

class LeaveQueryController {
  async fetchAllLeaves(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const response: LeaveQueryResponse =
        await LeaveQueryHandler.fetchAllLeaves(req.body);
      res.status(200).json({
        status: 200,
        message: "Successfully fetch Leaves",
        data: response,
      });
    } catch (error) {
      if (error instanceof Error) {
        next(error);
      } else {
        next(new Error(`${error}`));
      }
    }
  }
     async fetchLeaveTypes(req: Request, res: Response, next: NextFunction):Promise<void> {
          try{
              const response = await LeaveQueryHandler.findAllLeavesType();
              res.status(200).json({ status: 200, message: "Successfully fetch leave types", data: response });
          }catch(error){
              next(new Error(`${error}`));
          }
      }
}

export default new LeaveQueryController();
