import { NextFunction, Request, Response } from "express";
import {
  LeaveApproveAttributes,
  LeaveAttributes,
} from "../../../../../../interface/ERP/leaveAttributes";
import { LeaveHandler } from "../../../handler/leaves/external/leave.handler";
import { ApiResponse } from "../../../../../utility/responseHandler";

class LeaveController {
  async createLeave(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const leaveAttributes: LeaveAttributes = req.body;
      const response = await LeaveHandler.applyLeave(leaveAttributes);
      if (response) {
        return ApiResponse.success(
          res,
          response.message || "Operation successful",
          response.status || 201,
          {
            response,
          }
        );
      }
      return ApiResponse.error(res, "Failed to Apply Leave", 400);
    } catch (error: any) {
      if (error instanceof Error) {
        return ApiResponse.error(res, error.message, (error as any).statusCode || 500);
      }
      return ApiResponse.error(res, "An unexpected error occurred", 500);

    }
  }

  async updateLeave(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const updateAttributes: LeaveAttributes = req.body;
      const response = await LeaveHandler.updateLeaves(updateAttributes);
      if (response) {
        return ApiResponse.success(
          res,
          response.message || "Operation successful",
          response.status || 200,
          {
            response,
          }
        );
      }
      return ApiResponse.error(res, "Failed to Update Leave", 400);
    } catch (error) {
      if (error instanceof Error) {
        return ApiResponse.error(res, error.message, (error as any).statusCode || 500);
      }
      return ApiResponse.error(res, "An unexpected error occurred", 500);
    }
  }
  async approvedLeave(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const approvedAttributes: LeaveApproveAttributes = req.body;
      const response = await LeaveHandler.approvedLeave(
        approvedAttributes.leave_applicant_id as string,
        approvedAttributes
      );
      if (response) {
        return ApiResponse.success(
          res,
          response.message || "Approved Leave successful",
          response.status || 200,
          {
            response,
          }
        );
      }
      return ApiResponse.error(res, "Failed to Update Leave", 400);
    } catch (error) {
      if (error instanceof Error) {
        return ApiResponse.error(res, error.message, (error as any).statusCode || 500);
      }
      return ApiResponse.error(res, "An unexpected error occurred", 500);

    }
  }
}
export default new LeaveController();
