import { TrainingBillClaimApprove, TrainingBillClaimResponse } from "../../../../../../interface/ERP/trainingAttributes";
import { EmployeeCodeAttributes } from "../../../../../../interface/ERP/travelAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import { ERPAPI } from "../../../../../middleware/externalAPI/ERP/erp.api";
import { RequestHandler } from "../../../../../middleware/request.handler";

class TrainingClaimExternalRepository {
    static async fetchTrainingBillClaim(employee_code: EmployeeCodeAttributes) :Promise<TrainingBillClaimResponse> {
        try {
          const response = await RequestHandler.post<TrainingBillClaimResponse,EmployeeCodeAttributes>(
            ERPAPI.fetchTrainingClaimApproval,
            employee_code
          );
          return response;
        } catch (error) {
            return errorHandler(error);
        }
    }
    static async fetchTrainingClaim(employee_code: EmployeeCodeAttributes): Promise<TrainingBillClaimResponse> {
        try {
            console.log('bscvsbvdnbsvn');

           return await RequestHandler.post<TrainingBillClaimResponse, EmployeeCodeAttributes>(
                ERPAPI.fetchClaims,
                employee_code
            );
        } catch (error) {
            throw errorHandler(error);
        }
    }
    static async approvedClaimExpenses(payload: TrainingBillClaimApprove): Promise<TrainingBillClaimResponse> {
        try {
            return await RequestHandler.post<TrainingBillClaimResponse, EmployeeCodeAttributes>(
                ERPAPI.approvedClaimExpenses,
                payload
            );
        } catch (error) {
            throw errorHandler(error);
        }
    }
}

export default TrainingClaimExternalRepository;