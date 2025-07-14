import { EmployeeAttributes } from "../../../../../interface/ERP/employeeAttributes";
import { ERPAPI } from "../../../../middleware/externalAPI/ERP/erp.api";
import { RequestHandler } from "../../../../middleware/request.handler";

class EmployeeRepository {
  // Define methods for employee repository here
  // For example, you might have methods like:

  static async fetchAllEmployee(): Promise<EmployeeAttributes[]> {
    const response = await RequestHandler.get<EmployeeAttributes[]>(
                ERPAPI.fetchAllEmployee,
              );
    return response;
  } 
}

export default EmployeeRepository;