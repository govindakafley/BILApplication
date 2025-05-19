import { TrainingAttributes } from "../../../../../../interface/ERP/trainingAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import Training from "../../../model/training.model";

class TrainingSystemRepository {
  static async CreateTraining(
    trainingData: TrainingAttributes
  ): Promise<Training> {
    try {
      const response = await Training.create(trainingData);
      return response;
    } catch (error) {
        console.log()
      throw errorHandler(error);
    }
  }
  static async findTrainingByid(id: string): Promise<Training | null> {
    try {
      const training = await Training.findOne({ where: { training_id: id } });
      return training;
    } catch (error) {
      throw errorHandler(error);
    }
  }
static async updateTraining(trainingData: TrainingAttributes): Promise<Training> {
  try {
    const result = await Training.update(trainingData, {
      where: { training_id: trainingData.training_id },
      returning: true // should work in PostgreSQL
    });


    const [updateCount, updatedRows] = result;

    if (!Array.isArray(updatedRows) || updatedRows.length === 0) {
      throw new Error("Training not found or not updated");
    }
    return updatedRows[0];

  } catch (error) {
    throw errorHandler(error);
  }
}


}

export default TrainingSystemRepository;
