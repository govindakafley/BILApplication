import { ValidationError } from "sequelize";
import {
  LeaveCreationAttributes,
  LeaveResponse,
  LeaveTypeResponse,
} from "../../../../interface/ERP/leaveAttributes";
import { LeaveRepository } from "../repository/leave.repository";
import leaveSchema from "../validator/leaveValidator";
import {
  DataBaseError,
  validateError,
} from "../../../middleware/errorHandler/error.handler";

export class LeaveHandler extends LeaveRepository {
  constructor() {
    super();
  }

  static async applyLeave(
    leaveAttributes: LeaveCreationAttributes
  ): Promise<LeaveResponse> {
    try {
      console.log("leaveAttributes", leaveAttributes);
      await leaveSchema.validate(leaveAttributes, { abortEarly: true });
      const response = await this.createLeave(leaveAttributes);
      if (response.status === 201) {
        const createLeave: LeaveResponse = await this.execute(leaveAttributes);
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
  static async findAllLeavesType(): Promise<LeaveTypeResponse> {
    try {
      const response: LeaveTypeResponse = await this.findAllLeavesTypes();
      return response;
    } catch (error) {
      throw new DataBaseError(`${error}`);
    }
  }
}
export default new LeaveHandler();
