import { ValidationError } from "sequelize";
import {
  LeaveCreationAttributes,
  LeaveQueryResponse,
  LeaveResponse,
  LeaveTypeResponse,
} from "../../../../../../interface/ERP/leaveAttributes";
import { LeaveExternalRepository } from "../../../repository/leaves/external/leave.repository";
import leaveSchema from "../../../validator/leaveValidator";
import {
  DataBaseError,
  validateError,
} from "../../../../../middleware/errorHandler/error.handler";
import { LeaveSystemRepository } from "../../../repository/leaves/system/leave.repository";

export class LeaveHandler implements LeaveExternalRepository, LeaveSystemRepository {
  static async applyLeave(
    leaveAttributes: LeaveCreationAttributes
  ): Promise<LeaveResponse> {
    try {
      await leaveSchema.validate(leaveAttributes, { abortEarly: true });
      const response = await LeaveExternalRepository.createLeave(leaveAttributes);
      console.log(response)
      if (response.status === 201) {
        const leaveAttribute: LeaveCreationAttributes = {
          ...leaveAttributes,
          leave_applicant_id: response.data[0].leave_applicant_id,
          create_Update: "create",
        }
        const createLeave:LeaveResponse = await LeaveSystemRepository.execute(leaveAttribute);
        return createLeave;
      }
      return response;
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new validateError(`${error.errors}`);
      }
      throw new DataBaseError(`${error}`);
    }
  }

 
  static async updateLeaves(leaveAttributes: LeaveCreationAttributes): Promise<LeaveResponse> {
    try {
      await leaveSchema.validate(leaveAttributes, { abortEarly: true });
      const response = await LeaveExternalRepository.updateLeave(leaveAttributes.leave_applicant_id, leaveAttributes);
      if (response.status === 201) {
        const leaveAttribute: LeaveCreationAttributes = {
          ...leaveAttributes,
          create_Update: 'update',
        }
        const createLeave: LeaveResponse = await LeaveSystemRepository.execute(leaveAttribute);
        return createLeave;
      }

      return response;
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new validateError(`${error.errors}`);
      }
      throw new DataBaseError(`${error}`);
    }
    
  }
}
export default new LeaveHandler();
