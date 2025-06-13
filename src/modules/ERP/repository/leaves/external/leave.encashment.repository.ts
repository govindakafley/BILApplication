import {
  LeaveEncashmentResponse,
  LeaveEncashmentWithEncash,
  LeaveEncashmentWithPay,
} from "../../../../../../interface/ERP/leaveAttributes";
import {
  EmployeeCodeAttributes,
  LeaveApprovedAttributes,
} from "../../../../../../interface/ERP/travelAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import { ERPAPI } from "../../../../../middleware/externalAPI/ERP/erp.api";
import { RequestHandler } from "../../../../../middleware/request.handler";

class LeaveEncashmentExternalRepository {
  static async fetchLeaveEncashment(
    employee_code: EmployeeCodeAttributes
  ): Promise<LeaveEncashmentResponse> {
    try {
      const data = await RequestHandler.post<
        LeaveEncashmentResponse,
        EmployeeCodeAttributes
      >(ERPAPI.fetchLeaveEncashment, employee_code);
      return data;
    } catch (error) {
      throw errorHandler(error);
    }
  }

  static async applyLeaveEncashment(
    payload: LeaveEncashmentWithPay
  ): Promise<LeaveEncashmentResponse> {
    try {
      const leaveEncashmentPayload: LeaveEncashmentWithEncash = {
        employee_code: payload.employee_code,
        encash_amount: payload.basic_pay,
        encash_year: payload.financial_year,
        encash_cl_balance: payload.casual_leave_balance,
        encash_el_balance: payload.earned_leave_balance,
        employee_id: payload.employee_id,
        employee_name: payload.employee_name,
        total_leave_balance: payload.total_leave_balance,
      };

      return await RequestHandler.post<
        LeaveEncashmentResponse,
        LeaveEncashmentWithEncash
      >(ERPAPI.applyLeaveEncashment, leaveEncashmentPayload);
    } catch (error) {
      throw errorHandler(error);
    }
  }

  static async fetchApprovalLeaveEncashment(
    employee_code: EmployeeCodeAttributes
  ): Promise<LeaveEncashmentResponse> {
    try {
      return await RequestHandler.post<
        LeaveEncashmentResponse,
        EmployeeCodeAttributes
      >(ERPAPI.leaveEncashmentApproval, employee_code);
    } catch (error) {
      throw errorHandler(error);
    }
  }

  static async approveLeaveEncashment(
    payload: LeaveApprovedAttributes
  ): Promise<LeaveEncashmentResponse> {
    try {
      return await RequestHandler.post<
        LeaveEncashmentResponse,
        LeaveApprovedAttributes
      >(ERPAPI.leaveEncashmentApproved, payload);
    } catch (error) {
      throw errorHandler(error);
    }
  }
}

export default LeaveEncashmentExternalRepository;
