import { Request, Response, NextFunction } from "express";
import TravelExternalHandler from "../../../handler/travels/external/travel.handler";
import ResponseHandler from "../../../../../middleware/response.handler";

class TravelExternalController {
 static async createTravel(req: Request, res: Response, next: NextFunction): Promise<void> {
   return await ResponseHandler.handleRequest(
      res,
      () => TravelExternalHandler.createTravel(req.body),
      "Travel created successfully",
      201
    );
  }

  static async fetchTravelTypes(req: Request, res: Response, next: NextFunction): Promise<void> {
   return await ResponseHandler.handleRequest(
      res,
      () => TravelExternalHandler.fetchTravelTypes(),
      "Travel types fetched successfully",
      
    );
  }

 static async fetchTravelApplicant(req: Request, res: Response, next: NextFunction): Promise<void> {
   return await ResponseHandler.handleRequest(
      res,
      () => TravelExternalHandler.fetchTravelApplicant(req.body),
      "Travel applicant fetched successfully"
    );
  }

 static async travelVerification(req: Request, res: Response, next: NextFunction): Promise<void> {
   return await ResponseHandler.handleRequest(
      res,
      () => TravelExternalHandler.travelVerification(req.body),
      "Travel verified successfully"
    );
  }
 static  async fetchTravelByHead(req: Request, res: Response, next: NextFunction): Promise<void> {
    return await ResponseHandler.handleRequest(res, ()=> 
      TravelExternalHandler.fetchTravelByHead(req.body),
    "Travel applicant fetched successfully"
    )
  }
  static async travelApproved(req: Request, res: Response, next: NextFunction): Promise<void> {
    const travelId = req.body.travel_id;
    if (!travelId) {
      throw new Error("Travel ID is required for approval.");
    }
    return await ResponseHandler.handleRequest(
        res,
        () => TravelExternalHandler.travelApproved(req.body, travelId),
        "Travel approved successfully"
      );
    }
}

export default TravelExternalController;
