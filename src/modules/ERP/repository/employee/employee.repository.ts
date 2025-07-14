import { BranchAttributes, BranchResponse, EmployeeAttributes } from "../../../../../interface/ERP/employeeAttributes";
import { ERPAPI } from "../../../../middleware/externalAPI/ERP/erp.api";
import { RequestHandler } from "../../../../middleware/request.handler";

class EmployeeRepository {

  static async fetchAllEmployee(): Promise<EmployeeAttributes[]> {
    const response = await RequestHandler.get<EmployeeAttributes[]>(
                ERPAPI.fetchAllEmployee,
              );
    return response;
  } 
  static async fetchAllBranch(): Promise<BranchAttributes[] | null> {
   return await RequestHandler.get(
      ERPAPI.fetchBranch
    ); 
  }
    static async fetchAllDepartment(department: Partial<BranchAttributes>): Promise<BranchAttributes[]> {
        const response = await RequestHandler.post<BranchResponse, Partial<BranchAttributes>>(
        ERPAPI.fetchAllDepartment,
        department
        );
        return response;
    }
    static async fetchAllSection(section: Partial<BranchAttributes>): Promise<BranchAttributes[]> {
        const response = await RequestHandler.post<BranchResponse, Partial<BranchAttributes>>(
        ERPAPI.fetchAllSection,
        section
        );
        return response.data;
    }
}

export default EmployeeRepository;