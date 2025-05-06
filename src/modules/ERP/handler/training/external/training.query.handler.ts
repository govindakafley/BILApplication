import {
  TrainingAttributes,
  TrainingTypes
} from "../../../../../../interface/ERP/trainingAttributes";
import { EmployeeCodeAttributes } from "../../../../../../interface/ERP/travelAttributes";
import { CacheHandler } from "../../../../../middleware/cache.handler";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import { NotFoundError } from "../../../../../middleware/errorHandler/error.handler";
import { CacheManager } from "../../../../../utility/cacheManager";
import TrainingQueryExternalRepository from "../../../repository/training/external/training.query.repository";
import { EmployeeCodeValidatorSchema } from "../../../validator/travelValidator";

class TrainingQueryExternalHandler {

  async trainingType(): Promise<TrainingTypes> {
    try {
      return CacheHandler.getOrSetCache('trainingType', () =>
        TrainingQueryExternalRepository.trainingType()
      );
    } catch (error) {
      throw errorHandler(error);
    }
  }

  async trainingCategoryById(id: number): Promise<TrainingTypes> {
    try {
      if (!Number.isInteger(id)) {
        throw new NotFoundError("Invalid category ID provided.");
      }

      const cacheKey = `trainingCategory_${id}`;
      return CacheHandler.getOrSetCache(cacheKey, () =>
        TrainingQueryExternalRepository.trainingCategoryById(id)
      );
    } catch (error) {
      throw errorHandler(error);
    }
  }

  async fetchTrainingCountryFunding(): Promise<TrainingTypes> {
    try {
      return CacheHandler.getOrSetCache('fetchTrainingCountryFunding', () =>
        TrainingQueryExternalRepository.fetchTrainingCountryFunding()
      );
    } catch (error) {
      throw errorHandler(error);
    }
  }

  async fetchAllTrainingList(employeeCode: EmployeeCodeAttributes): Promise<TrainingAttributes> {
    try {
      await EmployeeCodeValidatorSchema.validate(employeeCode);
      return await TrainingQueryExternalRepository.fetchAllTraining(employeeCode);
    } catch (error) {
      throw errorHandler(error);
    }
  }
}

export default new TrainingQueryExternalHandler();
