import { UserCreationAttributes } from "../../../../../../interface/auth/LoginAttributes";
import { LeaveQueryResponse } from "../../../../../../interface/ERP/leaveAttributes";
import  errorHandler  from "../../../../../middleware/errorHandler/commonErrorHandler";

import { ERPAPI } from "../../../../../middleware/externalAPI/ERP/erp.api";
import apiClient from "../../../../../utility/api";
export class LeaveQueryRepository{

  static async fetchAllApprovalLeaves(
    UserAttributes: Partial<UserCreationAttributes>
  ): Promise<LeaveQueryResponse> {
    try {
      const response = await apiClient.post(
        ERPAPI.leaveQueryApproval,
        UserAttributes
      );
      const data: LeaveQueryResponse = response.data as LeaveQueryResponse;
      return data
      
    } catch (error) {
      throw errorHandler(error);
    }
  }
}
