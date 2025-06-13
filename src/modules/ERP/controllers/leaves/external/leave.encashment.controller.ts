// import { Request, Response } from "express";
import { LeaveEncashmentHandler } from "../../../handler/leaves/external/leave.encashment.handler";
import { ApiResponse } from "../../../../../utility/responseHandler";
import { Request, Response } from "express";

class LeaveEncashmentController {
     async fetchLeaveEncashment(req: Request, res: Response): Promise<any> {
        try{
            const response = await LeaveEncashmentHandler.fetchLeaveEncashment(req.body);
            return ApiResponse.success(
                res,
                response.message || "Successfully fetched leave encashment",
                response.status || 200,
                response.data || response
            );
        } catch (error: any) {
            return ApiResponse.error(res, error instanceof Error ? error.message : "An unexpected error occurred", error.statusCode || 500);
        }
    }
    async applyLeaveEncashment(req: Request, res: Response): Promise<any> {
        try {
            const response = await LeaveEncashmentHandler.applyLeaveEncashment(req.body);
            return ApiResponse.success(  res,
                response.message || "Successfully Applyed leave encashment",
                response.status || 200,
                response.data || response);
        } catch (error: any) {
            return ApiResponse.error(res, error instanceof Error ? error.message : "An unexpected error occurred", error.statusCode || 500);
        }
    }
    async fetchApprovalLeaveEncashment(req: Request, res: Response): Promise<any> {
        try {
            const response = await LeaveEncashmentHandler.fetchApprovalLeaveEncashment(req.body);
            return ApiResponse.success(res, response.message, response.status || 200, response.data || response);
        } catch (error: any) {
            return ApiResponse.error(res, error instanceof Error ? error.message : "An unexpected error occurred", error.statusCode || 500);
        }
    }
    async leaveEncashmentApprove(req: Request, res: Response): Promise<any> {
        try {
            const response = await LeaveEncashmentHandler.approveLeaveEncashment(req.body);
            return ApiResponse.success(res, response.message, response.status, response.data);
        } catch (error: any) {
            return ApiResponse.error(res, error instanceof Error ? error.message : "An unexpected error occurred", error.statusCode || 500);
        }
    }
    
}
export default new LeaveEncashmentController();
