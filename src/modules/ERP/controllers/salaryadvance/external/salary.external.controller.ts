import { NextFunction, Request, Response } from "express";
import ResponseHandler from "../../../../../middleware/response.handler";
import SalaryAdvanceExternalHandler from "../../../handler/salaryadvance/external/salary.query.handler"
class SalaryAdvanceExternalController{
    async fetchSalaryAdvancedetail(req:Request, res: Response, next: NextFunction): Promise<void>{
        return await ResponseHandler.handleRequest(res, ()=> 
            SalaryAdvanceExternalHandler.fetchAdvanceSalarydetail(req.body),
        'Fetch Salary Advance Detail successfully'
        )
    }
}
export default new SalaryAdvanceExternalController()