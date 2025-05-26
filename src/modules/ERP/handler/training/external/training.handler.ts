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

      // const data = TrainingSystemRepository.CreateTraining({
      //   ...trainingData,
      //   training_id:  JSON.parse(id),
      //   create_update: "create",
      // });
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

      // const trainingData = {
      //   ...trainingVerification,
      //     training_fund: Array.isArray(trainingVerification.training_fund)
      //     ? trainingVerification.training_fund
      //     : [trainingVerification.training_fund],
      //   travel_id: trainingVerification.training_id,
      //   created_update: "Verified",
      // };
      // const findtrainingData = await TrainingSystemRepository.findTrainingByid(
      //   trainingData.training_id as string 
      // );
      // if (!findtrainingData) {

      //   await TrainingSystemRepository.CreateTraining(trainingData);
      //   return response;
      // }

      //  await TrainingSystemRepository.updateTraining(trainingData);
        return response;
    } catch (error) {
      console.log(error);
      throw errorHandler(error);
    }
  }
}

export default new TrainingExternalHandler();
