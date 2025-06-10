import e from "express";
import {
  SalaryAdvanceAttributes,
  SalaryResponseAttributes,
} from "../../../../../../interface/ERP/salaryAdvance";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import SalaryAdvanceExternalRepository from "../../../repository/salaryadvance/external/salary.external.repository";
import SalaryAdvanceSystemRepository from "../../../repository/salaryadvance/system/salary.system.repository";

class SalaryAdvanceExternalHandler extends SalaryAdvanceExternalRepository {
  async applyAdvanceSalary(
    payload: SalaryAdvanceAttributes
  ): Promise<SalaryResponseAttributes> {
    try {
      const externalData = {
        employee_code: payload.employee_code,
        sa_advance_amt: payload.salary_advance_amt,
        sa_purpose: payload.salary_purpose,
      };
      const externalResponse = await SalaryAdvanceExternalRepository.applySalaryAdvance(externalData);
     
      return {
        status: 200,
        message: "Applied the salary advance successfully.",
        data: externalResponse && (externalResponse as any).employee_code
      };
    } catch (error) {
      throw errorHandler(error);
    }
  }
  async approveSalaryAdvance(
    payload: SalaryAdvanceAttributes
  ): Promise<SalaryResponseAttributes> {
    try {
        const payloadData: SalaryAdvanceAttributes = {
            employee_code: payload.employee_code,
            sa_monthly_installment: payload.sa_monthly_installment,
            sa_request_advance_amt: payload.sa_request_advance_amt,
            approval_remarks: payload.approval_remarks,
            sa_status: payload.sa_status,
            sa_id: payload.sa_id,
        };
      const response: SalaryResponseAttributes =  await SalaryAdvanceExternalRepository.approveSalaryAdvance(payloadData);
      return {
        status: 200,
        message: "Approved the salary advance successfully.",
        data: response && (response as any).employee_code,
      };
    } catch (error) {
      throw errorHandler(error);
    }
  }
}

export default new SalaryAdvanceExternalHandler();
