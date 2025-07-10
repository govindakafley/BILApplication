import { Optional, Options } from "sequelize";
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
        return RequestHandler.post<TrainingResponse, TrainingVerification>(
            `${ERPAPI.trainingVerification}/${payload.training_id}`, 
            payload
        );
    }

    static TrainingApproved(payload:TrainingVerification ):Promise<TrainingResponse> {
      return RequestHandler.post<TrainingResponse,TrainingVerification>(
         `${ERPAPI.trainingApproved}/${payload.training_id}`, 
            payload
      ) 
    }

  }
  
  export default TrainingExternalRepository;
  