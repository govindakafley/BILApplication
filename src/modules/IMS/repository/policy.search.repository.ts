import {
  PolicySearchAttributes,
  policySearchResponse,
} from "../../../../interface/IMS/policysearch.attributes";
import { IMSAPI } from "../../../middleware/externalAPI/IMS/ims.api";
import { RequestHandler } from "../../../middleware/request.handler";


class PolicySearchExternalRepository {
  static async fetchPolicySearch(
    policyDetail: PolicySearchAttributes
  ): Promise<policySearchResponse> {
    const response = await RequestHandler.post<
      policySearchResponse,
      PolicySearchAttributes
    >(IMSAPI.policysearch, policyDetail);
    return response;
  }

  static async fetchClaimSearch(
    policyDetail: PolicySearchAttributes
  ): Promise<policySearchResponse> {
    return await RequestHandler.post<
      policySearchResponse,
      PolicySearchAttributes
    >(IMSAPI.claimsearch, policyDetail);
  }
}

export default PolicySearchExternalRepository;

