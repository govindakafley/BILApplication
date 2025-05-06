import { TrainingAttributes } from "../../../../../../interface/ERP/trainingAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import Training from "../../../model/training.model";

class TrainingSystemRepository {
    static async CreateTraining(trainingData: TrainingAttributes):Promise<Training>{
        try{
            const response = await Training.create(trainingData)
            return response
        }catch(error){
            throw errorHandler(error)
        }
    }
}

export default TrainingSystemRepository;