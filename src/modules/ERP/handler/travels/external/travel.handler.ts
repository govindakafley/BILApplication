import {
  EmployeeCodeAttributes,
  TravelAttributes,
  TravelResponse
} from "../../../../../../interface/ERP/travelAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import TravelExternalRepository from "../../../repository/travel/external/travel.repository";
import TravelSystemRepository from "../../../repository/travel/system/travel.repository";
import {
  EmployeeCodeValidatorSchema,
  TravelValidatorSchema
} from "../../../validator/travelValidator";
import { CacheHandler } from "../../../../../middleware/cache.handler";
import { CacheManager } from "../../../../../utility/cacheManager";

class TravelExternalHandler {
  async createTravel(travelAttributes: TravelAttributes): Promise<TravelResponse> {
    try {
      await TravelValidatorSchema.validate(travelAttributes, { abortEarly: true });

      const response = await TravelExternalRepository.create(travelAttributes);
      if (!response) return response;

      // const travelData: TravelAttributes = {
      //   ...travelAttributes,
      //   travel_id: response as unknown as string,
      //   create_Update: "create",
      // };
      // const travel = await TravelSystemRepository.createTravel(travelData);

      return {
        status: 201,
        message: "Travel created successfully",
        data: response,
      };
    } catch (error) {
      throw errorHandler(error);
    }
  }

  async fetchTravelTypes(): Promise<TravelResponse> {
    try {
      const cacheKey = "travelTypes";
      const data = await CacheHandler.getOrSetCache(cacheKey, () =>
        TravelExternalRepository.fetchTravelTypes()
      );
      return {
        status: 200,
        message: "Travel types fetched successfully",
        data,
      };
    } catch (error) {
      throw errorHandler(error);
    }
  }
  async fetchTravelByHead(employee_code: EmployeeCodeAttributes): Promise<TravelResponse>{
    try{
      await EmployeeCodeValidatorSchema.validate(employee_code);
      const cacheKey = `fetchTravelByHead_${employee_code}`;
      const data = await CacheHandler.getOrSetCache(cacheKey, ()=> 
        TravelExternalRepository.fetchTravelByHead(employee_code)
      );
      return {
        status: 200,
        message: "Travel applicant Head/ADM fetched successfully",
        data,
      };
    }catch(error) {
      throw errorHandler(error);
    }
  }

  async fetchTravelApplicant(employee_code: EmployeeCodeAttributes): Promise<TravelResponse> {
    try {
      await EmployeeCodeValidatorSchema.validate(employee_code);

      const cacheKey = `travelApplicant_${employee_code.employee_code}`;
      const data = await CacheHandler.getOrSetCache(cacheKey, () =>
        TravelExternalRepository.fetchTravelApplicant(employee_code)
      );
      return {
        status: 200,
        message: "Travel applicant fetched successfully",
        data,
      };
    } catch (error) {
      throw errorHandler(error);
    }
  }

  async travelVerification(travelAttributes: TravelAttributes): Promise<TravelResponse> {
    try {
      await TravelValidatorSchema.validate(travelAttributes, { abortEarly: true });

      const verificationPayload = {
        travel_id: travelAttributes.travel_id,
        employee_code: travelAttributes.employee_code,
        travel_status: travelAttributes.travel_type,
        travel_remarks: travelAttributes.travel_description,
      };
      const response = await TravelExternalRepository.TravelVerification(
        verificationPayload,
        verificationPayload.travel_id
      );

      if (!response) return response;

      // const updatedTravel: TravelAttributes = {
      //   ...travelAttributes,
      //   travel_id: travelAttributes.travel_id,
      //   create_Update: "Approved",
      // };

      // const travel = await TravelSystemRepository.updateTravel(updatedTravel.travel_id, updatedTravel);

      return {
        status: 200,
        message: "Travel updated successfully",
        data: response,
      };
    } catch (error) {
      throw errorHandler(error);
    }
  }
}

export default new TravelExternalHandler();
