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
  async fetchAllBranch(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const response = await EmployeeHandler.fetchAllBranch();
      return ApiResponse.success(
        res,
        "Fetch Branch successful",
        200,
        {
          response,
        }
      );
    } catch (error) {
      return ApiResponse.error(res, (error as any).message, (error as any).statusCode || 500);
    }
  }
  async fetchAllDepartments(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const response = await EmployeeHandler.getAllDepartments(req.body);
      console.log('response', response)
      return ApiResponse.success(
        res,
        "Fetch Departments successful",
        200,
        {
          response,
        }
      );
    } catch (error) {
      return ApiResponse.error(res, (error as any).message, (error as any).statusCode || 500);
    }
  }
    async fetchAllSections(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
        const response = await EmployeeHandler.getAllSections(req.body);
        return ApiResponse.success(
            res,
            "Fetch Sections successful",
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