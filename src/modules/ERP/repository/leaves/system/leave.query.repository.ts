import { Op } from "sequelize"; // Import Sequelize operators
import { LeaveAttributes } from "../../../../../../interface/ERP/leaveAttributes";
import Leave from "../../../model/createLeave.model";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";

class LeavesQueryRepository {
  static async findAllLeaves(
    applicant_id?: string,
    searchQuery?: string,
    limit: number = 10 
  ): Promise<LeaveAttributes[]> {
    const whereCondition: any = {
      leave_applicant_id: applicant_id, 
    };

    if (searchQuery) {
      whereCondition[Op.or] = [
        { leave_reason: { [Op.like]: `%${searchQuery}%` } },
        { employee_code: { [Op.like]: `%${searchQuery}%` } },
        { employee_id: { [Op.like]: `%${searchQuery}%` } },
        { email: { [Op.like]: `%${searchQuery}%` } },
        { create_Update: { [Op.like]: `%${searchQuery}%` } },
      ];
    }
    try {
      const response = await Leave.findAll({
        where: whereCondition,
        limit,
      });
      return response;
    } catch (error) {
      throw errorHandler(error);  // Consolidated error handling
    }
  }
}

export default LeavesQueryRepository;
