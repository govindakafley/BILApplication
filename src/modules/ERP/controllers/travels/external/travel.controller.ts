import { NextFunction, Request, Response } from "express";
import TravelExternalHandler from "../../../handler/travels/external/travel.handler";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import { TravelResponse } from "../../../../../../interface/ERP/travelAttributes";
import { ApiResponse } from "../../../../../utility/responseHandler";

class TravelExternalController {
    async createTravel(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            const response = await TravelExternalHandler.createTravel(req.body); // Assuming req.body contains the travel attributes
            return ApiResponse.success(res, response.message, response.status, typeof response.data === 'object' ? response.data : { data: response.data }); // Adjust the response as needed
        } catch (error) {
            const err = error as Error & { statusCode?: number };
            return ApiResponse.error(res, err.message, err.statusCode || 500);
        }
    }
}
export default new TravelExternalController();