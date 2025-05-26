import { SalaryResponseAttributes } from "../../../../../../interface/ERP/salaryAdvance";
import { EmployeeCodeAttributes } from "../../../../../../interface/ERP/travelAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import SalaryAdvanceExternalRepository from "../../../repository/salaryadvance/external/salary.external.repository";
import { EmployeeCodeValidatorSchema } from "../../../validator/travelValidator";

class SalaryAdvanceQueryExternalHandler {
    async fetchAdvanceSalarydetail(employee_code:EmployeeCodeAttributes): Promise<SalaryResponseAttributes> {
        try{
             await EmployeeCodeValidatorSchema.validate(employee_code);
             const response: SalaryResponseAttributes  = await SalaryAdvanceExternalRepository.fetchSalaryAdvancedetail(employee_code);
             console.log('response', response);
             return response;
        }catch(error){
            throw errorHandler(error);
        }
    }
    async fetchSalaryAdvance(employee_code: EmployeeCodeAttributes): Promise<SalaryResponseAttributes> {
        try {
            await EmployeeCodeValidatorSchema.validate(employee_code);
            const response: SalaryResponseAttributes = await SalaryAdvanceExternalRepository.fetchSalaryAdvance(employee_code);
            return response;
        } catch (error) {
            throw errorHandler(error);
        }
    }
}

export default new SalaryAdvanceQueryExternalHandler()

