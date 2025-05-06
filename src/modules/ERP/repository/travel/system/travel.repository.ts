import { TravelAttributes } from "../../../../../../interface/ERP/travelAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import Travel from "../../../model/travel.model";
class TravelSystemRepository {
  constructor() {
    // Initialization code
  }

  static async createTravel(travelData: TravelAttributes): Promise<Travel> {
    try {
      const travel = await Travel.create(travelData);
      return travel;
    } catch (error) {
      throw errorHandler(error);
    }
  }

    static async updateTravel(travelId?: string, travelData? : TravelAttributes): Promise<Travel> {
        try {
            if (!travelData) {
                throw new Error("Invalid travel data provided.");
            }
            const [affectedCount] = await Travel.update(travelData, { where: { travel_id: travelId } });
            
            if (affectedCount === 0) {
                throw new Error("Travel not found or no changes made.");
            }

            const travel = await Travel.findOne({ where: { travel_id: travelId } });
            if (!travel) {
                throw new Error("Travel not found after update.");
            }

            return travel;
        } catch (error) {
            throw errorHandler(error);
        }
    }
}

export default TravelSystemRepository;
