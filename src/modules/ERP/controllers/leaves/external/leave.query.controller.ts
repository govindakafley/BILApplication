import { NextFunction, Request, Response } from "express";
import { LeaveQueryResponse } from "../../../../../../interface/ERP/leaveAttributes";
import LeaveQueryHandler from "../../../handler/leaves/external/leave.query.handler";
import { ApiResponse } from "../../../../../utility/responseHandler";

class LeaveQueryController {
  async fetchAllLeaves(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const response: LeaveQueryResponse =
        await LeaveQueryHandler.fetchAllApprovalLeaves(req.body);
      if (response) {
        return ApiResponse.success(res, response.message, response.status, response.data);
      }
      return ApiResponse.error(res, "Failed to fetch LeaveQueryResponse", 400);
    } catch (error) {
      if (error instanceof Error) {
        next(error);
      } else {
        next(new Error(`${error}`));
      }
    }
  }
  async fetchLeaveTypes(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const response = await LeaveQueryHandler.findAllLeavesType();
      if (response) {
        return ApiResponse.success(res, 'Successfully fetch Leaves Types', 200, 
          response,
        );
      }
      return ApiResponse.error(res, "Failed to fetch LeaveTypesQuery", 400);
    } catch (error:any) {
      return ApiResponse.error(res, error instanceof Error ? error.message : "An unexpected error occurred", error.statusCode);
    }
  }
  
  async leaveapplicant(req:Request, res:Response, next:NextFunction):Promise<any> {
    try {
      const response = await LeaveQueryHandler.leaveapplicant(req.body);
      if (response) {
        return ApiResponse.success(res, 'Successfully fetch Leaves applicant', 200, 
          response,
        );
      }
      return ApiResponse.error(res, "Failed to fetch Leave applicant", 400);
    } catch (error:any) {
      return ApiResponse.error(res, error instanceof Error ? error.message : "An unexpected error occurred", error.statusCode);
    }
  }
}

export default new LeaveQueryController();
