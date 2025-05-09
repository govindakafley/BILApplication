import { SalaryResponseAttributes } from "../../../../../../interface/ERP/salaryAdvance";
import { EmployeeCodeAttributes } from "../../../../../../interface/ERP/travelAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import SalaryAdvanceExternalRepository from "../../../repository/salaryadvance/external/salary.external.repository";
import { EmployeeCodeValidatorSchema } from "../../../validator/travelValidator";

class SalaryAdvanceExternalHandler {
    async fetchAdvanceSalarydetail(employee_code:EmployeeCodeAttributes): Promise<SalaryResponseAttributes> {
        try{
             await EmployeeCodeValidatorSchema.validate(employee_code);
             const response: SalaryResponseAttributes  = await SalaryAdvanceExternalRepository.fetchSalaryAdvancedetail(employee_code);
             return response;
        }catch(error){
            throw errorHandler(error);
        }
    }
}

export default new SalaryAdvanceExternalHandler()

