import { TravelAttributes, TravelResponse } from "../../../../../../interface/ERP/travelAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import TravelExternalRepository from "../../../repository/travel/external/travel.repository"; // Adjust the path as needed

class TravelExternalHandler implements TravelExternalRepository {

    static async createTravel(travelAttributes: TravelAttributes): Promise<TravelResponse> {
        try {
            const response = await this.createTravel(travelAttributes);
            return response;
        } catch (error) {
            throw errorHandler(error); // Consolidated error handling
        }
    }
}
export default TravelExternalHandler;