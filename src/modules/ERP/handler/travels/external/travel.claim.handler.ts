import {
  EmployeeCodeAttributes,
  TravelClaimApprove,
  TravelClaimResponse,
} from "../../../../../../interface/ERP/travelAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import TravelClaimExternalRepository from "../../../repository/travel/external/travel.claim.repository";
import { TravelValidatorApprovedSchema } from "../../../validator/travelValidator";

class TravelClaimExternalHandler {
   async handleFetchTravelClaim(
    employee_code: EmployeeCodeAttributes
  ): Promise<TravelClaimResponse> {
    try {
      return await TravelClaimExternalRepository.fetchTravelClaim(employee_code);
    } catch (error: any) {
      throw errorHandler(error);
    }
  }

   async handleApprovedClaimExpenses(
    payload: TravelClaimApprove
  ): Promise<TravelClaimResponse> {
    try {
      await TravelValidatorApprovedSchema.validate(payload, { abortEarly: true });
      
      return await TravelClaimExternalRepository.approvedClaimExpenses(payload);
    } catch (error: any) {
        throw errorHandler(error || "Error approving claim expenses");
    }
  }
}

export default new TravelClaimExternalHandler();
