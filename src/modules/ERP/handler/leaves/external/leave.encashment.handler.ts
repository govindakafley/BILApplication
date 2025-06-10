import { LeaveEncashmentWithPay, LeaveEncashmentResponse } from "../../../../../../interface/ERP/leaveAttributes";
import { EmployeeCodeAttributes, LeaveApprovedAttributes } from "../../../../../../interface/ERP/travelAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import LeaveEncashmentExternalRepository from "../../../repository/leaves/external/leave.encashment.repository";
import { LeaveBalanceSchema } from "../../../validator/leaveValidator";
import { EmployeeCodeValidatorSchema } from "../../../validator/travelValidator";
export class LeaveEncashmentHandler implements LeaveEncashmentExternalRepository {
    static async fetchLeaveEncashment(employee_code: EmployeeCodeAttributes): Promise<LeaveEncashmentResponse> {
        try{
            await EmployeeCodeValidatorSchema.validate( employee_code , { abortEarly: true });
            const response = await LeaveEncashmentExternalRepository.fetchLeaveEncashment(employee_code);

            return response;
        } catch (error: any) {
           throw errorHandler(error);
        }
    }
    static async applyLeaveEncashment(encashAttributes:LeaveEncashmentWithPay ): Promise<LeaveEncashmentResponse> {
        try {
            await LeaveBalanceSchema.validate(encashAttributes, { abortEarly: true });
            const response = await LeaveEncashmentExternalRepository.applyLeaveEncashment(encashAttributes);
            return response;
        } catch (error) {
            throw errorHandler(error);
        }
    }
    static async fetchApprovalLeaveEncashment(employee_code: EmployeeCodeAttributes): Promise<LeaveEncashmentResponse> {
        try {
            await EmployeeCodeValidatorSchema.validate({ employee_code }, { abortEarly: true });
            const response = await LeaveEncashmentExternalRepository.fetchApprovalLeaveEncashment(employee_code);
            return response;
        } catch (error) {
            throw new Error(`Failed to fetch approval leave encashment: ${error}`);
        }
    }
    static async approveLeaveEncashment(payload: LeaveApprovedAttributes): Promise<LeaveEncashmentResponse> {
        try {
            await LeaveBalanceSchema.validate(payload, { abortEarly: true });
            const response = await LeaveEncashmentExternalRepository.approveLeaveEncashment(payload);
            return response;
        } catch (error) {
          throw errorHandler(error);
        }
    }
}
