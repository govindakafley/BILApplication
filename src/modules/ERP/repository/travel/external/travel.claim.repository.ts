import { EmployeeCodeAttributes, TravelClaimApprove } from "../../../../../../interface/ERP/travelAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import { ERPAPI } from "../../../../../middleware/externalAPI/ERP/erp.api";
import { RequestHandler } from "../../../../../middleware/request.handler";
import  {TravelClaimResponse}  from "../../../../../../interface/ERP/travelAttributes";

class TravelClaimExternalRepository {
    static async fetchTravelClaim(employee_code: EmployeeCodeAttributes): Promise<TravelClaimResponse> {
        try {
            return await RequestHandler.post<TravelClaimResponse, EmployeeCodeAttributes>(
                ERPAPI.fetchTravelClaimApproval,
                employee_code
            );
        } catch (error) {
            throw errorHandler(error);
        }
    }
    static async approvedClaimExpenses(payload: TravelClaimApprove): Promise<TravelClaimResponse> {
        try {
            return await RequestHandler.post<TravelClaimResponse, TravelClaimApprove>(
                ERPAPI.approvedTravelClaimExpenses,
                payload
            );
        } catch (error) {
            throw errorHandler(error);
        }
    }
}

export default TravelClaimExternalRepository;