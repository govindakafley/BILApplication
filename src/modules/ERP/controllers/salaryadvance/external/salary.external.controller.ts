import { NextFunction, Request, Response } from "express";
import ResponseHandler from "../../../../../middleware/response.handler";
import SalaryAdvanceQueryExternalHandler from "../../../handler/salaryadvance/external/salary.query.handler"
import SalaryAdvanceExternalHandler from  "../../../handler/salaryadvance/external/salary.handler"
class SalaryAdvanceExternalController{
    async fetchSalaryAdvancedetail(req:Request, res: Response, next: NextFunction): Promise<void>{
        return await ResponseHandler.handleRequest(res, ()=> 
            SalaryAdvanceQueryExternalHandler.fetchAdvanceSalarydetail(req.body),
        'Fetch Salary Advance Detail successfully'
        )
    }
    async applySalaryAdvance(req:Request, res: Response, next: NextFunction):Promise<void> {
        return await ResponseHandler.handleRequest(res, ()=>
            SalaryAdvanceExternalHandler.applyAdvanceSalary(req.body),
        'Applied Salary Advance Successfully'
        )
    }
    async fetchSalaryAdvance(req:Request, res: Response, next: NextFunction): Promise<void> {
        return await ResponseHandler.handleRequest(res, ()=>
            SalaryAdvanceQueryExternalHandler.fetchSalaryAdvance(req.body),
        'Fetch Salary Advance Successfully'
        )
    }
}

export default new SalaryAdvanceExternalController()