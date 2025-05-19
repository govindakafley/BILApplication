import { Request, Response, NextFunction } from "express";
import TrainingExternalHandler from "../../handler/training/external/training.handler";
import ResponseHandler from "../../../../middleware/response.handler";

class TrainingExternalController {
  async createTraining(req: Request, res: Response, next: NextFunction): Promise<any> {
      return await ResponseHandler.handleRequest(res, ()=> TrainingExternalHandler.createTraining(req.body),  "Training created successfully",201)
  }
  async TrainingVerification(req: Request, res: Response, next: NextFunction): Promise<any> {
          return await ResponseHandler.handleRequest(res, ()=> TrainingExternalHandler.TrainingVerification(req.body),  "Training Verified successfully",201)

  }

}
export default new TrainingExternalController();
