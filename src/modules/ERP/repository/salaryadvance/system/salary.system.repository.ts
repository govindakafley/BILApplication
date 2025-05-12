import { SalaryCreationAttributes } from "../../../../../../interface/ERP/salaryAdvance";
import SalaryAdvance from "../../../model/salary.advance.model";

class SalaryAdvanceSystemRepository {
    static async applySalaryAdvance(payload: SalaryCreationAttributes):Promise<SalaryCreationAttributes>{
        const response = await SalaryAdvance.create(payload)
        return response
    }
}

export default SalaryAdvanceSystemRepository