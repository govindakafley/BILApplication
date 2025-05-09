import {
  TrainingAttributes,
  TrainingResponse,
  TrainingVerification
} from "../../../../../../interface/ERP/trainingAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import TrainingExternalRepository from "../../../repository/training/external/training.repository";
import TrainingSystemRepository from "../../../repository/training/system/training.repository";
import { trainingValidatorSchema } from "../../../validator/trainingValidaion";

class TrainingExternalHandler {
  async createTraining(trainingData: TrainingAttributes): Promise<TrainingResponse> {
    try {
      await trainingValidatorSchema.validate(trainingData);

      const externalRes = await TrainingExternalRepository.createTraining(trainingData); // Added await
      if (externalRes.status !== 201 || !externalRes.data) {
        return externalRes;
      }

       TrainingSystemRepository.CreateTraining({
        ...trainingData,
        training_id: externalRes.data,
        create_update: "create"
      });

      return {
        status: 201,
        message: "Training created successfully",
        data: externalRes.data
      };
    } catch (error) {
      throw errorHandler(error);
    }
  }
  async TrainingVerification(trainingVerification: TrainingVerification):Promise<TrainingResponse> {
    try{
       const response = await TrainingExternalRepository.trainingVerification(trainingVerification)
       if (response.status == 200) {
        const trainingData = {
          ...trainingVerification,
          travel_id: trainingVerification.training_id,
          created_update: 'Verified'
        }
          const data = await TrainingSystemRepository.CreateTraining(trainingData)
          return response
       }
       return response
    } catch (error) {
      throw errorHandler(error);
    }
  }
}

export default new TrainingExternalHandler();
