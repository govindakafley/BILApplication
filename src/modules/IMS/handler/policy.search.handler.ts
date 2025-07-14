import { PolicySearchAttributes, policySearchResponse } from "../../../../interface/IMS/policysearch.attributes";
import errorHandler from "../../../middleware/errorHandler/commonErrorHandler";
import PolicySearchExternalRepository from "../repository/policy.search.repository";

class PolicySearchHandler {
  static async policySearch(policyDetail: PolicySearchAttributes): Promise<policySearchResponse> {
    try {
      return await PolicySearchExternalRepository.fetchPolicySearch(policyDetail);
    } catch (error) {
      throw errorHandler(error);
    }
  }

  static async claimSearch(policyDetail: PolicySearchAttributes): Promise<policySearchResponse> {
    try {
      return await PolicySearchExternalRepository.fetchClaimSearch(policyDetail);
    } catch (error) {
      throw errorHandler(error);
        }
    }
}

export default PolicySearchHandler;
