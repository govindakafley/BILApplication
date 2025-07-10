import { Request, Response, NextFunction } from "express";
import TrainingExternalHandler from "../../handler/training/external/training.handler";
import ResponseHandler from "../../../../middleware/response.handler";
import { ApiResponse } from "../../../../utility/responseHandler";

class TrainingExternalController {
  async createTraining(req: Request, res: Response, next: NextFunction): Promise<any> {
      return await ResponseHandler.handleRequest(res, ()=> TrainingExternalHandler.createTraining(req.body),  "Training created successfully",201)
  }
  async TrainingVerification(req: Request, res: Response, next: NextFunction): Promise<any> {
          return await ResponseHandler.handleRequest(res, ()=> TrainingExternalHandler.TrainingVerification(req.body),  "Training Verified successfully",201)

  }
   async ApprovedTraining(req:Request, res: Response,next: NextFunction ): Promise<any>{
      try{
        const response = await TrainingExternalHandler.TrainingApproved(req.body);
              return ApiResponse.success(
                res,
                response.message || "Training claim fetched successfully",
                response.status || 200,
                response || []
              );
      }catch(error){
          return ApiResponse.error(
        res,
        error instanceof Error ? error.message : "An unexpected error occurred",
        (error as any).status || 500
      );
      }
   }
}
export default new TrainingExternalController();
