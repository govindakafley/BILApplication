import {
  LeaveCreationAttributes,
  LeaveResponse,
  LeaveTypeResponse,
} from "../../../../interface/ERP/leaveAttributes";
import {
  AxiosError,
  DataBaseError,
  NotFoundError,
} from "../../../middleware/errorHandler/error.handler";
import { ERPAPI } from "../../../middleware/externalAPI/ERP/erp.api";
import apiClient from "../../../utility/api";
import CreateLeave from "../model/createLeave.model";

export class LeaveRepository {
  static async createLeave(
    leaveAttributes: LeaveCreationAttributes
  ): Promise<LeaveResponse> {
    try {
      const response = await apiClient.post<{ data: LeaveResponse }>(
        ERPAPI.createLeave,
        leaveAttributes
      );
      const data = response.data;
      const createLeave: LeaveResponse = data?.data || data;
      return createLeave;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error?.response?.message || error?.message || "Unknown error";
        throw new AxiosError(errorMessage);
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
 static async execute( leaveAttributes: LeaveCreationAttributes): Promise<LeaveResponse> {
    try {
       await CreateLeave.create(leaveAttributes);
      return {
        status: 201,
        message: "Leave created successfully",
      };
    }catch(error){
      throw new DataBaseError(`${error}`);
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
      if (error instanceof AxiosError) {
        const errorMessage =
          error?.response?.message || error?.message || "Unknown error";
        throw new AxiosError(errorMessage);
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
