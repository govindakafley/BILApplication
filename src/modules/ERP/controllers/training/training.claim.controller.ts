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
      const response =
        await TrainingClaimExternalHandler.fetchApprovalTrainingApproval(
          req.body
        );
      return ApiResponse.success(
        res,
        response.message,
        response.status,
        response.data
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
