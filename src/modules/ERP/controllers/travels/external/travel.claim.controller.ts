import { NextFunction, Request, Response } from "express";
import TravelClaimExternalHandler from "../../../handler/travels/external/travel.claim.handler";
import { ApiResponse } from "../../../../../utility/responseHandler";

class TravelClaimController {
  static async fetchTravelClaim(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const employee_code = req.body;
      const response = await TravelClaimExternalHandler.handleFetchTravelClaim(employee_code);
      console.log("Response from TravelClaimController:", response);
      return ApiResponse.success(
        res,
        response.message || "Travel claim fetched successfully",
        response.status || 200,
        response || []
      );
    } catch (error: any) {
      return ApiResponse.error(
        res,
        error || "Internal Server Error",
        500
      );
    }
  }

  static async approvedClaimExpenses(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const payload = req.body;
      const response = await TravelClaimExternalHandler.handleApprovedClaimExpenses(payload);
      return ApiResponse.success(
        res,
        response.message || "Travel claim approved successfully",
        response.status || 200,
        response || []
      );
    } catch (error: any) {
      return ApiResponse.error(
        res,
        error || "Internal Server Error",
        500
     );
    }
  }
}

export default TravelClaimController;
