import { RefundAttributes, refundResponse } from "../../../../../interface/providentfund/providentfundAttributes";
import errorHandler from "../../../../middleware/errorHandler/commonErrorHandler";
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
          throw errorHandler(error);  // Consolidated error handling

        }
    }
}