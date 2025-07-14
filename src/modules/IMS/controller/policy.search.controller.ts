// src/controller/policySearch.controller.ts

import { Request, Response, NextFunction } from "express";
import  PolicySearchHandler  from "../handler/policy.search.handler";
import { ApiResponse } from "../../../utility/responseHandler";

class PolicySearchController {
  static async fetchPolicySearch(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const policyDetail = req.body;
      const response = await PolicySearchHandler.policySearch(policyDetail);
      return ApiResponse.success(
        res,
        response.message || "Training claim fetched successfully",
        response.status || 200,
        response 
      
      );
     
    } catch (error) {
         return ApiResponse.error(
        res,
        error instanceof Error ? error.message : "An unexpected error occurred",
        (error as any).status || 500
      );    }
  }
    static async fetchClaimSearch(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            
        const policyDetail = req.body;
        const response = await PolicySearchHandler.claimSearch(policyDetail);
        const {detail} = response.data
        return ApiResponse.success(
            res,
            response.message || "Training claim fetched successfully",
            response.status || 200,
            { data: detail }
        );
         
        } catch (error) {
             return ApiResponse.error(
            res,
            error instanceof Error ? error.message : "An unexpected error occurred",
            (error as any).status || 500
        );    }
    }
}

export default PolicySearchController;
