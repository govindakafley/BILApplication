import { EmployeeAttributes } from "../../../../../interface/ERP/employeeAttributes";
import errorHandler from "../../../../middleware/errorHandler/commonErrorHandler";
import EmployeeRepository from "../../repository/employee/employee.repository";

class EmployeeHandler {
  static async getAllEmployees(): Promise<EmployeeAttributes[]> {
    try{
        return await EmployeeRepository.fetchAllEmployee();
    }catch (error) {
          throw errorHandler(error);
    }
  }
}
export default EmployeeHandler;