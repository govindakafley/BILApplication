import {
    TrainingAttributes,
    TrainingTypes
  } from "../../../../../../interface/ERP/trainingAttributes";
  import { EmployeeCodeAttributes } from "../../../../../../interface/ERP/travelAttributes";
  import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
  import { NotFoundError } from "../../../../../middleware/errorHandler/error.handler";
  import { ERPAPI } from "../../../../../middleware/externalAPI/ERP/erp.api";
import { RequestHandler } from "../../../../../middleware/request.handler";
  import apiClient from "../../../../../utility/api";
  
  class TrainingQueryExternalRepository {
    static async trainingType(): Promise<TrainingTypes> {
      return await RequestHandler.get<TrainingTypes>(ERPAPI.trainingType);
    }
  
    static async trainingCategoryById(id: number): Promise<TrainingTypes> {
      const category = await RequestHandler.get<TrainingTypes>(`${ERPAPI.trainingCategory}/${id}`);
      if (!(Array.isArray(category) && category.length > 0)) {
        throw new NotFoundError("Category data is not found");
      }
      return category;
    }
  
    static async fetchTrainingCountryFunding(): Promise<TrainingTypes> {
      return RequestHandler.get<TrainingTypes>(ERPAPI.trainingCountryFunding);
    }
  
    static async fetchAllTraining(employeeCode: EmployeeCodeAttributes): Promise<TrainingAttributes> {
      const response = RequestHandler.post<TrainingAttributes, EmployeeCodeAttributes>(
        ERPAPI.trainingList,
        employeeCode
      );
      return response
    }
  }
  
  export default TrainingQueryExternalRepository;
  