import {
  TrainingAttributes,
  TrainingResponse,
  TrainingVerification,
} from "../../../../../../interface/ERP/trainingAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import TrainingExternalRepository from "../../../repository/training/external/training.repository";
import TrainingSystemRepository from "../../../repository/training/system/training.repository";
import { trainingValidatorSchema } from "../../../validator/trainingValidaion";

class TrainingExternalHandler {
  async createTraining(
    trainingData: TrainingAttributes
  ): Promise<TrainingResponse> {
    try {
      await trainingValidatorSchema.validate(trainingData);

      const externalRes = await TrainingExternalRepository.createTraining(
        trainingData
      );

      if (!externalRes) {
        return externalRes;
      }
      const id =  JSON.stringify(externalRes)

      return {
        status: 201,
        message: "Training created successfully",
        data: JSON.parse(id),
      };
    } catch (error) {
      throw errorHandler(error);
    }
  }

  async TrainingVerification(
    trainingVerification: TrainingVerification
  ): Promise<TrainingResponse> {
    try {
      const response = await TrainingExternalRepository.trainingVerification(
        trainingVerification
      );
      if (!response) {
        return response;
      }

        return response;
    } catch (error) {
      throw errorHandler(error);
    }
  }
  async TrainingApproved( trainingApproval: TrainingVerification): Promise<TrainingResponse> {
    try{
        const response = await TrainingExternalRepository.TrainingApproved(trainingApproval);
        return response
    }catch(error){
      throw errorHandler(error);
    }
  }
}

export default new TrainingExternalHandler();
