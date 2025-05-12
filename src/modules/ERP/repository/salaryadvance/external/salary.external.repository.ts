import { SalaryAdvanceAttributes, SalaryResponseAttributes } from "../../../../../../interface/ERP/salaryAdvance";
import { EmployeeCodeAttributes } from "../../../../../../interface/ERP/travelAttributes";
import { ERPAPI } from "../../../../../middleware/externalAPI/ERP/erp.api";
import { RequestHandler } from "../../../../../middleware/request.handler";

class SalaryAdvanceExternalRepository {
    static async fetchSalaryAdvancedetail(payload: EmployeeCodeAttributes):Promise<SalaryResponseAttributes>{
       return RequestHandler.post<SalaryResponseAttributes, EmployeeCodeAttributes>(
        ERPAPI.salaryAdvanceDetail,
        payload
       )
    }

    static async applySalaryAdvance(payload:SalaryAdvanceAttributes ): Promise<SalaryResponseAttributes>{
        return RequestHandler.post<SalaryResponseAttributes,SalaryAdvanceAttributes >(
            ERPAPI.applySalaryAdvance,
            payload
        )
    }
}

export default SalaryAdvanceExternalRepository;