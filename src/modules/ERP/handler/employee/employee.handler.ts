import { BranchAttributes, EmployeeAttributes } from "../../../../../interface/ERP/employeeAttributes";
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
    static async fetchAllBranch(): Promise<BranchAttributes[] | null> {
        try{
            return await EmployeeRepository.fetchAllBranch();
        }catch (error) {
            throw errorHandler(error);
        }
    }
    static async getAllDepartments(department: Partial<BranchAttributes>): Promise<BranchAttributes[]> {
        try{
            return await EmployeeRepository.fetchAllDepartment(department);
        }catch (error) {
            throw errorHandler(error);
        }
    }
    static async getAllSections(section: Partial<BranchAttributes>): Promise<BranchAttributes[]> {
        try{
            return await EmployeeRepository.fetchAllSection(section);
        }catch (error) {
            throw errorHandler(error);
        }
    }
}
export default EmployeeHandler;