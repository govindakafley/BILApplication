import {
    TrainingAttributes,
    TrainingResponse
  } from "../../../../../../interface/ERP/trainingAttributes";
  import { EmployeeCodeAttributes } from "../../../../../../interface/ERP/travelAttributes";
  import { ERPAPI } from "../../../../../middleware/externalAPI/ERP/erp.api";
  import { RequestHandler } from "../../../../../middleware/request.handler";
  
  class TrainingExternalRepository {
   static createTraining(payload: TrainingAttributes): Promise<TrainingResponse> {
      return RequestHandler.post<TrainingResponse, TrainingAttributes>(
        ERPAPI.createTraining,
        payload
      );
    }
  
   static fetchTrainingByEmployeeCode(payload: EmployeeCodeAttributes): Promise<TrainingResponse> {
      return RequestHandler.post<TrainingResponse, EmployeeCodeAttributes>(
        ERPAPI.trainingReporting,
        payload
      );
    }
    
  }
  
  export default TrainingExternalRepository;
  