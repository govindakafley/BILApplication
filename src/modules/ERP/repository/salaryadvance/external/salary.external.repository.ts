import { SalaryAdvanceAttributes, SalaryResponseAttributes } from "../../../../../../interface/ERP/salaryAdvance";
import { EmployeeCodeAttributes } from "../../../../../../interface/ERP/travelAttributes";
import { ERPAPI } from "../../../../../middleware/externalAPI/ERP/erp.api";
import { RequestHandler } from "../../../../../middleware/request.handler";

class SalaryAdvanceExternalRepository {
    static async fetchSalaryAdvancedetail(payload: EmployeeCodeAttributes):Promise<SalaryResponseAttributes>{
       const response = RequestHandler.post<SalaryResponseAttributes, EmployeeCodeAttributes>(
        ERPAPI.salaryAdvanceDetail,
        payload
       )
       return response;
    }

    static async applySalaryAdvance(payload:SalaryAdvanceAttributes ): Promise<SalaryResponseAttributes>{
        return RequestHandler.post<SalaryResponseAttributes,SalaryAdvanceAttributes >(
            ERPAPI.applySalaryAdvance,
            payload
        )
    }
    static async fetchSalaryAdvance(payload: EmployeeCodeAttributes): Promise<SalaryResponseAttributes> {
        return RequestHandler.post<SalaryResponseAttributes, EmployeeCodeAttributes>(
            ERPAPI.listSalaryAdvance,
            payload
        );
    }
    static  async approveSalaryAdvance(payload: SalaryAdvanceAttributes): Promise<SalaryResponseAttributes> {
        return RequestHandler.post<SalaryResponseAttributes, SalaryAdvanceAttributes>(
            ERPAPI.salaryAdvanceApproval,
            payload
        );
    }
}

export default SalaryAdvanceExternalRepository;