import { TrainingBillClaimApprove, TrainingBillClaimResponse } from "../../../../../../interface/ERP/trainingAttributes";
import { EmployeeCodeAttributes } from "../../../../../../interface/ERP/travelAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import TrainingClaimExternalRepository from "../../../repository/training/external/training.claim.repository";

class TrainingClaimExternalHandler extends  TrainingClaimExternalRepository{
    async fetchApprovalTrainingApproval(employee_code: EmployeeCodeAttributes): Promise<TrainingBillClaimResponse> {
        try {

            const response = await TrainingClaimExternalRepository.fetchTrainingBillClaim(employee_code);
            return response;
        } catch (error) {
            throw errorHandler(error);
        }
    }
    async fetchTrainingClaim(employee_code: EmployeeCodeAttributes): Promise<TrainingBillClaimResponse> {
        try {
            const response = await TrainingClaimExternalRepository.fetchTrainingClaim(employee_code);
            return response;
        } catch (error) {
            throw errorHandler(error);
        }
    }
    async approvedClaimExpenses(payload: TrainingBillClaimApprove): Promise<TrainingBillClaimResponse> {
        try {
            const response = await TrainingClaimExternalRepository.approvedClaimExpenses(payload);
            return response;
        } catch (error) {
            throw errorHandler(error);
        }
    }


}

export default new TrainingClaimExternalHandler();