import e, { NextFunction, Request, Response } from "express";
import EmployeeHandler from "../../handler/employee/employee.handler";
import { ApiResponse } from "../../../../utility/responseHandler";

class EmployeeController {
  // Other methods...

  async fetchAllEmployees(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const response = await EmployeeHandler.getAllEmployees();
      return ApiResponse.success(
        res,
        "Fetch Employees successful",
        200,
        {
          response,
        }
      );
    } catch (error) {
      return ApiResponse.error(res, (error as any).message, (error as any).statusCode || 500);
    }
  }
}
export default new EmployeeController();