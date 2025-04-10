import { TravelAttributes, TravelResponse } from "../../../../../../interface/ERP/travelAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import { ERPAPI } from "../../../../../middleware/externalAPI/ERP/erp.api";
import apiClient from "../../../../../utility/api";

class TravelExternalRepository {
    static async create(travelAttributes: TravelAttributes): Promise<TravelResponse> {
        try {
            const response = await apiClient.post(ERPAPI.createTravel,travelAttributes);
            const { status, message, data } = response.data as { status: number; message: string; data: any };
            return {
                status: status,
                message: message,
                data: data
            };
        } catch (error) {
            throw errorHandler(error);
        }
    }
}
export default TravelExternalRepository;
