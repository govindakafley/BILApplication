import { Request, Response, NextFunction } from "express";
import TravelExternalHandler from "../../../handler/travels/external/travel.handler";
import ResponseHandler from "../../../../../middleware/response.handler";

class TravelExternalController {
  async createTravel(req: Request, res: Response, next: NextFunction): Promise<void> {
   return await ResponseHandler.handleRequest(
      res,
      () => TravelExternalHandler.createTravel(req.body),
      "Travel created successfully",
      201
    );
  }

  async fetchTravelTypes(req: Request, res: Response, next: NextFunction): Promise<void> {
   return await ResponseHandler.handleRequest(
      res,
      () => TravelExternalHandler.fetchTravelTypes(),
      "Travel types fetched successfully",
      
    );
  }

  async fetchTravelApplicant(req: Request, res: Response, next: NextFunction): Promise<void> {
   return await ResponseHandler.handleRequest(
      res,
      () => TravelExternalHandler.fetchTravelApplicant(req.body),
      "Travel applicant fetched successfully"
    );
  }

  async travelVerification(req: Request, res: Response, next: NextFunction): Promise<void> {
   return await ResponseHandler.handleRequest(
      res,
      () => TravelExternalHandler.travelVerification(req.body),
      "Travel verified successfully"
    );
  }
  async fetchTravelByHead(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await ResponseHandler.handleRequest(res, ()=> 
      TravelExternalHandler.fetchTravelByHead(req.body),
    "Travel applicant fetched successfully"
    )
  }
}

export default new TravelExternalController();
