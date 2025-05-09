import { SalaryResponseAttributes } from "../../../../../../interface/ERP/salaryAdvance";
import { EmployeeCodeAttributes } from "../../../../../../interface/ERP/travelAttributes";
import { ERPAPI } from "../../../../../middleware/externalAPI/ERP/erp.api";
import { RequestHandler } from "../../../../../middleware/request.handler";

class SalaryAdvanceExternalRepository {
    // static async applySalaryAdvance(payload: SalaryAdvanceAttributes)
    static async fetchSalaryAdvancedetail(payload: EmployeeCodeAttributes):Promise<SalaryResponseAttributes>{
       return RequestHandler.post<SalaryResponseAttributes, EmployeeCodeAttributes>(
        ERPAPI.salaryAdvanceDetail,
        payload
       )
    }
}

export default SalaryAdvanceExternalRepository;