import { UserCreationAttributes } from "../../../../../../interface/auth/LoginAttributes";
import { LeaveQueryResponse } from "../../../../../../interface/ERP/leaveAttributes";
import {
  axiosError,
  DataBaseError,
  NotFoundError,
} from "../../../../../middleware/errorHandler/error.handler";
import { ERPAPI } from "../../../../../middleware/externalAPI/ERP/erp.api";
import apiClient from "../../../../../utility/api";
export class LeaveQueryRepository {
  static async fetchAllLeaves(UserAttributes: UserCreationAttributes): Promise<LeaveQueryResponse> {
    try {
      const response = await apiClient.post<{ data: LeaveQueryResponse }>(
        ERPAPI.leaveQuery,
        UserAttributes
      );
      const data = response.data;
      const leave: LeaveQueryResponse = data?.data || data;
      return leave;
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
