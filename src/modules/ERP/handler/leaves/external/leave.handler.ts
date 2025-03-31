import { ValidationError } from "sequelize";
import {
  LeaveCreationAttributes,
  LeaveResponse,
  LeaveApproveAttributes, // Ensure this is imported as a type
} from "../../../../../../interface/ERP/leaveAttributes";
import { LeaveExternalRepository } from "../../../repository/leaves/external/leave.repository";
import {
  leaveSchema,
  updateleaveSchema,
} from "../../../validator/leaveValidator";

import { LeaveSystemRepository } from "../../../repository/leaves/system/leave.repository";
import LeavesQueryRepository from "../../../repository/leaves/system/leave.query.repository";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
export class LeaveHandler
  implements LeaveExternalRepository, LeaveSystemRepository
{
  static async applyLeave(
    leaveAttributes: LeaveCreationAttributes
  ): Promise<LeaveResponse> {
    try {
      await leaveSchema.validate(leaveAttributes, { abortEarly: true });
      const response = await LeaveExternalRepository.createLeave(
        leaveAttributes
      );
      if (response.status === 201) {
        const leaveAttribute: LeaveCreationAttributes = {
          ...leaveAttributes,
          leave_applicant_id: response.data as unknown as string,
          create_Update: "create",
        };
        const createLeave = await LeaveSystemRepository.execute(leaveAttribute);
        return {
          status: 201,
          message: "Leave created successfully",
          data: createLeave.data,
        };
      }
      return response;
    } catch (error) {
      throw errorHandler(error); // Consolidated error handling
    }
  }

  static async updateLeaves(
    leaveAttributes: LeaveCreationAttributes
  ): Promise<LeaveResponse> {
    try {
      await leaveSchema.validate(leaveAttributes, { abortEarly: true });
      const response = await LeaveExternalRepository.updateLeave(
        leaveAttributes.leave_applicant_id as string,
        leaveAttributes
      );
      if (response.status === 201) {
        const leaveAttribute: LeaveCreationAttributes = {
          ...leaveAttributes,
          create_Update: "update",
        };
        const createLeave: LeaveResponse =
          await LeaveSystemRepository.updateLeave(
            leaveAttributes.leave_applicant_id as string,
            leaveAttribute
          );
        return {
          status: 201,
          message: "Leave updated successfully",
          data: createLeave.data,
        };
      }

      return response;
    } catch (error) {
      throw errorHandler(error); // Consolidated error handling
    }
  }

  static async approvedLeave(
    leave_applicant_id: string,
    leaveApprovedAttributes: LeaveApproveAttributes
  ): Promise<LeaveResponse> {
    try {
      await updateleaveSchema.validate(leaveApprovedAttributes);

      const response = await LeaveExternalRepository.approvedLeave(
        leave_applicant_id,
        leaveApprovedAttributes
      );
      if (response.status === 200) {
        const findLeaveAttributes = await LeavesQueryRepository.findAllLeaves(
          leave_applicant_id
        );
        const approveLeaveAttributes: Partial<LeaveApproveAttributes> = {
          ...findLeaveAttributes,
          create_Update: "Approved",
        };
        {
          findLeaveAttributes
            ? await LeaveSystemRepository.approvedLeaves(
                leave_applicant_id,
                approveLeaveAttributes
              )
            : await LeaveSystemRepository.execute(leaveApprovedAttributes);
        }
      }
      return response;
    } catch (error) {
      throw errorHandler(error); // Consolidated error handling
    }
  }
}
export default new LeaveHandler();
