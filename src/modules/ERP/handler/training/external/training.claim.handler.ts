import { TrainingBillClaimResponse } from "../../../../../../interface/ERP/trainingAttributes";
import { EmployeeCodeAttributes } from "../../../../../../interface/ERP/travelAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import TrainingClaimExternalRepository from "../../../repository/training/external/training.claim.repository";

class TrainingClaimExternalHandler extends  TrainingClaimExternalRepository{
    async fetchApprovalTrainingApproval(employee_code: EmployeeCodeAttributes): Promise<TrainingBillClaimResponse> {
        try {
            console.log('claim',employee_code)
            const response = await TrainingClaimExternalRepository.fetchTrainingBillClaim(employee_code);
            return response;
        }catch(error){
            throw errorHandler(error);
        }
    }
}

export default new TrainingClaimExternalHandler();