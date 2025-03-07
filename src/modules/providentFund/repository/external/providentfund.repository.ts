import { RefundAttributes, refundResponse } from "../../../../../interface/providentfund/providentfundAttributes";
import { axiosError, DataBaseError, UnauthorizedError } from "../../../../middleware/errorHandler/error.handler";
import { PPFAPI } from "../../../../middleware/externalAPI/providentFund/pf.api";
import apiClient from "../../../../utility/api";

class ProvidentFundRepository {
    static async verifyRefund(refundAttributes:RefundAttributes ): Promise<any>{
        try{
           const response = await apiClient.post<{data: refundResponse}>(
             PPFAPI.verifyRefunds,
             refundAttributes
           );
           return response;
        }catch(error){
           if(error instanceof DataBaseError){
                throw new DataBaseError(`${error}`)
           }
           else if(error instanceof axiosError){
            throw new axiosError(`{error}`)
           }
           if(error instanceof UnauthorizedError){
            throw new UnauthorizedError(`{error}`)
           }
        }
    }
}