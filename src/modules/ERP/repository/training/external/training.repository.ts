import {
    TrainingAttributes,
    TrainingResponse,
    TrainingVerification
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
    
    static trainingVerification(payload: TrainingVerification): Promise<TrainingResponse> {
        const trainingData = {
            ...payload,
            training_id: payload.training_id
        }
        return RequestHandler.post<TrainingResponse, TrainingVerification>(
            `${ERPAPI.trainingVerification}/${trainingData.training_id}`, 
            trainingData 
        );
    }

  }
  
  export default TrainingExternalRepository;
  