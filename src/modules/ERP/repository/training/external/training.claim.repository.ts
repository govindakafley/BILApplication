import { TrainingBillClaimResponse } from "../../../../../../interface/ERP/trainingAttributes";
import { EmployeeCodeAttributes } from "../../../../../../interface/ERP/travelAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import { ERPAPI } from "../../../../../middleware/externalAPI/ERP/erp.api";
import { RequestHandler } from "../../../../../middleware/request.handler";

class TrainingClaimExternalRepository {
    static async fetchTrainingBillClaim(employee_code: EmployeeCodeAttributes) :Promise<TrainingBillClaimResponse> {
        try{
          return await RequestHandler.post<TrainingBillClaimResponse,EmployeeCodeAttributes>(
            ERPAPI.fetchTrainingClaimApproval,
            employee_code
          );
        }catch(error){
            return errorHandler(error);
        }
    }
}

export default TrainingClaimExternalRepository;