import { SalaryCreationAttributes } from "../../../../../../interface/ERP/salaryAdvance";
import SalaryAdvance from "../../../model/salary.advance.model";

class SalaryAdvanceSystemRepository {
    static async applySalaryAdvance(payload: SalaryCreationAttributes):Promise<SalaryCreationAttributes>{
        const response = await SalaryAdvance.create(payload)
        return response
    }
    static async fetchsalaryAdvanceById(advance_id: string): Promise<SalaryCreationAttributes | null> {
        const response = await SalaryAdvance.findOne({ where: { advance_id: advance_id } });
        return response;
    }  
    static async updateSalaryAdvance(payload: SalaryCreationAttributes): Promise<SalaryCreationAttributes | null> {
        const response = await SalaryAdvance.findOne({ where: { advance_id: payload.advance_id } });
        if (response) {
            await response.update(payload);
            return response;
        }
        return null;
    } 
}

export default SalaryAdvanceSystemRepository