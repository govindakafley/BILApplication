import { SalaryAdvanceAttributes, SalaryResponseAttributes } from "../../../../../../interface/ERP/salaryAdvance";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import SalaryAdvanceExternalRepository from "../../../repository/salaryadvance/external/salary.external.repository";
import SalaryAdvanceSystemRepository from "../../../repository/salaryadvance/system/salary.system.repository";

class SalaryAdvanceExternalHandler extends SalaryAdvanceExternalRepository {
    async applyAdvanceSalary(payload: SalaryAdvanceAttributes): Promise<SalaryResponseAttributes> {
        try {
            const externalData = {
                employee_code: payload.employee_code,
                sa_advance_amt: payload.salary_advance_amt,
                sa_purpose: payload.salary_purpose,
                gross_salary: payload.gross_salary,
                applicable_advance_amt: payload.applicable_advance_amt,
                monthly_installment_amt: payload.monthly_installment_amt,
              };
              
            const externalResponse = await SalaryAdvanceExternalRepository.applySalaryAdvance(externalData);

            if (!externalResponse) {
                return {
                    status: 400,
                    message: 'Failed to apply salary advance externally.',
                    data: []
                };
            }

            const salaryAdvanceData = {
                ...payload,
                response: externalResponse
            };

            const systemData = await SalaryAdvanceSystemRepository.applySalaryAdvance(salaryAdvanceData);

            return {
                status: 201,
                message: 'Applied the salary advance successfully.',
                data: systemData ? [systemData] : []
            };
        } catch (error) {
            throw errorHandler(error);
        }
    }
}

export default new SalaryAdvanceExternalHandler();
