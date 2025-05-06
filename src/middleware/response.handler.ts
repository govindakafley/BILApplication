import { Response } from "express";
import { ApiResponse } from "../utility/responseHandler";

class ResponseHandler {
  async handleRequest(
    res: Response,
    action: () => Promise<any>,
    successMessage: string,
    successStatus: number = 200
  ): Promise<any> {
    try {
      const data = await action();
     return ApiResponse.success(res, successMessage, successStatus, data);
    } catch (error) {
      const err = error as Error & { statusCode?: number };
     return ApiResponse.error(res, err.message || "Internal Server Error", err.statusCode || 500);
    }
  }
}

export default new ResponseHandler();
