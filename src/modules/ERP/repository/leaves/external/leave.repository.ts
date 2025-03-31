import { array } from "yup";
import {
  leaveApplicateAttributes,
  LeaveApproveAttributes,
  LeaveAttributes,
  LeaveAttributesArray,
  LeaveCreationAttributes,
  LeaveResponse,
  LeaveTypeResponse,
} from "../../../../../../interface/ERP/leaveAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";

import { ERPAPI } from "../../../../../middleware/externalAPI/ERP/erp.api";
import apiClient from "../../../../../utility/api";
import { UnauthorizedError } from "../../../../../middleware/errorHandler/error.handler";

export class LeaveExternalRepository {
  static async createLeave(
    leaveAttributes: LeaveCreationAttributes
  ): Promise<LeaveResponse> {
    try {
     
      const pushLeaveToArray = {
        ...leaveAttributes, // Spread the original object
        leave_from_date: [leaveAttributes.leave_from_date], // Convert to array
        leave_to_date: [leaveAttributes.leave_to_date], // Convert to array
        leave_half_day: [leaveAttributes.leave_half_day], // Convert to array
        leave_day_shift: [leaveAttributes.leave_day_shift],
        no_of_leave_day: [leaveAttributes.no_of_leave_day],
      };

      const response = await apiClient.post(
        ERPAPI.createLeave,
        pushLeaveToArray
      );
  
      const responseData = response.data as { data: leaveApplicateAttributes; status: number; message: string };
      const createLeave: LeaveResponse = { 
        data: responseData.data,
        status: responseData.status,
        message: responseData.message
      };
      return createLeave;
    } catch (error: unknown) {
      throw errorHandler(error);  // Consolidated error handling

    }
  }

  static async findAllLeavesTypes(): Promise<LeaveTypeResponse> {
    try {
      const response = await apiClient.get<{ data: LeaveTypeResponse }>(
        ERPAPI.leaveTypes
      );
      const data = response.data;
      const leaveTypes: LeaveTypeResponse = data?.data || data;
      return leaveTypes;
    } catch (error) {
      throw errorHandler(error);  // Consolidated error handling

    }
  }
  static async updateLeave(
    leave_applicant_id : string,
    leaveAttributes: LeaveCreationAttributes
  ): Promise<LeaveResponse> {
    try {
      const response = await apiClient.post(
        `${ERPAPI.updateLeave}/${leave_applicant_id}`,
        leaveAttributes
      );
      const data = response.data;
      const updateLeave: LeaveResponse = data as LeaveResponse;
      return updateLeave;
    } catch (error) {
      throw errorHandler(error);  // Consolidated error handling
    }
  }
  
  static async approvedLeave (leave_applicant_id: string,leaveApprovedAttributes: LeaveApproveAttributes): Promise<LeaveResponse> {
    try{
       const response = await apiClient.post( `${ERPAPI.leaveApproval}/${leave_applicant_id}`,leaveApprovedAttributes)
       const data = response.data;
       const approvedLeave: LeaveResponse  = data as LeaveResponse
       return approvedLeave;
    }catch(error){
      throw errorHandler(error);  // Consolidated error handling
    }
  }
}
