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
        gross_salary: payload.gross_salary,
        applicable_advance_amt: payload.applicable_advance_amt,
        monthly_installment_amt: payload.monthly_installment_amt,
      };

      const externalResponse =
        await SalaryAdvanceExternalRepository.applySalaryAdvance(externalData);
      if (!externalResponse) {
        return {
          status: 400,
          message: "Failed to apply salary advance externally.",
          data: [],
        };
      }
       
      // const parsedResponse = JSON.stringify(externalResponse);
      // const salaryAdvanceData = {
      //   ...payload,
      //   advance_id: JSON.parse(parsedResponse),
      //   create_update: "create",
      // };

      // const systemData = await SalaryAdvanceSystemRepository.applySalaryAdvance(
      //   salaryAdvanceData
      // );

      return {
        status: 201,
        message: "Applied the salary advance successfully.",
        data: Array.isArray(externalResponse)
          ? externalResponse as SalaryAdvanceAttributes[]
          : [externalResponse as unknown as SalaryAdvanceAttributes],
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
            salary_advance_amt: payload.salary_advance_amt,
            salary_purpose: payload.salary_purpose,
            gross_salary: payload.gross_salary,
            applicable_advance_amt: payload.applicable_advance_amt,
            monthly_installment_amt: payload.monthly_installment_amt,
            approval_remarks: payload.approval_remarks,
            sa_id: payload.advance_id,
            sa_status: payload.sa_status,
        };
      const response: SalaryResponseAttributes =
        await SalaryAdvanceExternalRepository.approveSalaryAdvance(payloadData);
      if (!response) {
        return {
          status: 400,
          message: "Failed to approve salary advance externally.",
          data: [],
        };
      }
      return {
        status: 200,
        message: "Approved the salary advance successfully.",
        data: response && (response as any).employee_code
          ? [response as unknown as SalaryAdvanceAttributes]
          : Array.isArray(response)
            ? (response as SalaryAdvanceAttributes[])
            : [],
      };

      // const checkSalaryAdvance =
      //   await SalaryAdvanceSystemRepository.fetchsalaryAdvanceById(
      //     payload.advance_id
      //   );
        
      // const responseData = {
      //   ...payload,
      //   create_update: "Approved",
      // }
      // if (checkSalaryAdvance) {
      //   await SalaryAdvanceSystemRepository.updateSalaryAdvance(responseData);
      //   return {
      //     status: 200,
      //     message: "Updated the salary advance successfully.",
      //     data: [checkSalaryAdvance],
      //   };
      // } else {
      //   const systemData =
      //     await SalaryAdvanceSystemRepository.applySalaryAdvance(responseData);
      //   return {
      //     status: 201,
      //     message: "Created the salary advance successfully.",
      //     data: systemData ? [systemData] : [],
      //   };
      // }
    } catch (error) {
      throw errorHandler(error);
    }
  }
}

export default new SalaryAdvanceExternalHandler();
