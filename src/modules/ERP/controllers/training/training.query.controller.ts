import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../../../../utility/responseHandler";
import TrainingQueryExternalHandler from "../../handler/training/external/training.query.handler";
import ResponseHandler from "../../../../middleware/response.handler";

class TrainingExternalController {

  async trainingType(req: Request, res: Response, next: NextFunction): Promise<any> {
    const data =  await ResponseHandler.handleRequest(res, () => TrainingQueryExternalHandler.trainingType(), "Training types fetched successfully");
    return data
  }

  async trainingCategoryById(req: Request, res: Response, next: NextFunction): Promise<any> {
    const id = parseInt(req.params.id || req.body.id);
    return await ResponseHandler.handleRequest(res, () => TrainingQueryExternalHandler.trainingCategoryById(id), "Training category fetched successfully", 200);
  }

  async fetchTrainingCountryFunding(req: Request, res: Response, next: NextFunction): Promise<any> {
    return await ResponseHandler.handleRequest(res, () => TrainingQueryExternalHandler.fetchTrainingCountryFunding(), "Training country funding fetched successfully", 200);
  }
  
  async fetchAllTrainingList(req: Request, res: Response, next: NextFunction):Promise<any> {
    return await ResponseHandler.handleRequest(res, ()=> TrainingQueryExternalHandler.fetchAllTrainingList(req.body), "Training Data fetched successfully", 200)
  }
}

export default new TrainingExternalController();
