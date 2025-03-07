import {
  LeaveCreationAttributes,
  LeaveQueryResponse,
} from "../../../../../../interface/ERP/leaveAttributes";
import {
  DataBaseError,
} from "../../../../../middleware/errorHandler/error.handler";
import Leave from "../../../model/createLeave.model";
import { LeaveExternalRepository } from "../external/leave.repository";
import LeavesQueryRepository from "./leave.query.repository";

export class LeaveSystemRepository implements LeavesQueryRepository, LeaveExternalRepository {
  
  static async execute(
    leaveAttributes: LeaveCreationAttributes
  ): Promise<LeaveQueryResponse> {
    try {
      const createdLeave = await Leave.create(leaveAttributes);
      return {
        status: 201,
        message: "Leave created successfully",
        data: [createdLeave],
      };
    } catch (error) {
      throw new DataBaseError(`Error creating leave: ${error}`);
    }
  }

  static async updateLeave(
    leave_applicant_id: string,
    leaveAttributes: LeaveCreationAttributes
  ): Promise<any> {
    try {
      const existingLeaves = await LeavesQueryRepository.findAllLeaves("",leave_applicant_id, 10);
      
      if (existingLeaves.length === 0) {
        return LeaveSystemRepository.execute(leaveAttributes);
      }

      const updatedLeave = await LeaveExternalRepository.updateLeave(leave_applicant_id, leaveAttributes);
      
      return {
        status: 201,
        message: "Leave updated successfully",
        data: [updatedLeave],
      };
    } catch (error) {
      throw new DataBaseError(`Error updating leave: ${error}`);
    }
  }
}
