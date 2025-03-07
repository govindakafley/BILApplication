import {
  leaveApplicateAttributes,
  LeaveCreationAttributes,
  LeaveQueryResponse,
  LeaveResponse,
  LeaveTypeResponse,
} from "../../../../../../interface/ERP/leaveAttributes";
import {
  axiosError,
  DataBaseError,
  NotFoundError,
} from "../../../../../middleware/errorHandler/error.handler";
import { ERPAPI } from "../../../../../middleware/externalAPI/ERP/erp.api";
import apiClient from "../../../../../utility/api";
import CreateLeave from "../../../model/createLeave.model";

export class LeaveExternalRepository {
  static async createLeave(
    leaveAttributes: LeaveCreationAttributes
  ): Promise<LeaveResponse> {
    try {
      const response = await apiClient.post(
        ERPAPI.createLeave,
        leaveAttributes
      );
      const responseData = response.data as { data: leaveApplicateAttributes; status: number; message: string };
      const createLeave: LeaveResponse = { 
        data: [responseData.data],
        status: responseData.status,
        message: responseData.message
      };
      console.log(createLeave)
      return createLeave;
    } catch (error) {
      if (error instanceof axiosError) {
        const errorMessage =
          error?.response?.message || error?.message || "Unknown error";
        throw new axiosError(errorMessage);
      } else if (error instanceof DataBaseError) {
        throw new DataBaseError(
          "Database error occurred while processing login"
        );
      } else if (error instanceof NotFoundError) {
        throw new NotFoundError("User not found");
      } else {
        throw new Error("An unexpected error occurred");
      }
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
      if (error instanceof axiosError) {
        const errorMessage =
          error?.response?.message || error?.message || "Unknown error";
        throw new axiosError(errorMessage);
      } else if (error instanceof DataBaseError) {
        throw new DataBaseError(
          "Database error occurred while processing login"
        );
      } else if (error instanceof NotFoundError) {
        throw new NotFoundError("User not found");
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  }
  static async updateLeave(
    leave_applicant_id : string,
    leaveAttributes: LeaveCreationAttributes
  ): Promise<LeaveResponse> {
    try {
      const response = await apiClient.put<{ data: LeaveResponse }>(
        `${ERPAPI.updateLeave}/${leave_applicant_id}`,
        leaveAttributes
      );
      const data = response.data;
      const updateLeave: LeaveResponse = data?.data || data;
      return updateLeave;
    } catch (error) {
      if (error instanceof axiosError) {
        const errorMessage =
          error?.response?.message || error?.message || "Unknown error";
        throw new axiosError(errorMessage);
      } else if (error instanceof DataBaseError) {
        throw new DataBaseError(
          "Database error occurred while processing login"
        );
      } else if (error instanceof NotFoundError) {
        throw new NotFoundError("User not found");
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  }
}
