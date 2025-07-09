import { NextFunction, Request, Response } from "express";
import responseHandler from "../../../../middleware/response.handler";
import TrainingClaimExternalHandler from "../../handler/training/external/training.claim.handler";
import { ApiResponse } from "../../../../utility/responseHandler";
class TrainingClaimController {
  async fetchTrainingClaimApproval(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const response = await TrainingClaimExternalHandler.fetchApprovalTrainingApproval(
          req.body
        );
      return ApiResponse.success(
        res,
        response.message || "Training claim fetched successfully",
        response.status || 200,
        response.data || []
      );
    } catch (error) {
      return ApiResponse.error(
        res,
        error instanceof Error ? error.message : "An unexpected error occurred",
        (error as any).status || 500
      );
    }
  }
  async fetchTrainingClaim(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const response = await TrainingClaimExternalHandler.fetchTrainingClaim(
        req.body
      );
      return ApiResponse.success(
        res,
        response.message || "Training claim fetched successfully",
        response.status || 200,
        response.data || []
      );
    } catch (error) {
      return ApiResponse.error(
        res,
        error instanceof Error ? error.message : "An unexpected error occurred",
        (error as any).status || 500
      );
    }
  }
  async approvedClaimExpenses(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const response = await TrainingClaimExternalHandler.approvedClaimExpenses(
        req.body
      );
      return ApiResponse.success(
        res,
        response.message || "Training claim fetched successfully",
        response.status || 200,
        response.data || []
      );
    } catch (error) {
      return ApiResponse.error(
        res,
        error instanceof Error ? error.message : "An unexpected error occurred",
        (error as any).status || 500
      );
    }
  }
}

export default new TrainingClaimController();
