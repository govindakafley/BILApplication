import { EmployeeCodeAttributes, TravelAttributes, TravelResponse, TravelVerifyAttributes } from "../../../../../../interface/ERP/travelAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import { ERPAPI } from "../../../../../middleware/externalAPI/ERP/erp.api";
import { RequestHandler } from "../../../../../middleware/request.handler";
import apiClient from "../../../../../utility/api";

class TravelExternalRepository {
    static async create(travelAttributes: TravelAttributes): Promise<TravelResponse> {
        return await RequestHandler.post<TravelResponse, TravelAttributes>(ERPAPI.createTravel,travelAttributes)
    }
    
    static async fetchTravelTypes():Promise<TravelResponse> {
        return await RequestHandler.get<TravelResponse>(ERPAPI.travelTypes)
    }
    static async fetchTravelApplicant(employee_code: EmployeeCodeAttributes): Promise<TravelResponse> {
        return await RequestHandler.post<TravelResponse, EmployeeCodeAttributes>(ERPAPI.travelList, employee_code)
    }
    static async TravelVerification(travelAttributes: TravelVerifyAttributes, travel_id?: string): Promise<TravelResponse> {
        return await RequestHandler.post<TravelResponse,TravelVerifyAttributes >(`${ERPAPI.travelVerification}/${travel_id}`, travelAttributes)
    }  
    static async fetchTravelByHead(employee_code: EmployeeCodeAttributes): Promise<TravelResponse> {
        return await RequestHandler.post<TravelResponse, EmployeeCodeAttributes>(ERPAPI.travelQueryVerify, employee_code)

    }
}
export default TravelExternalRepository;
