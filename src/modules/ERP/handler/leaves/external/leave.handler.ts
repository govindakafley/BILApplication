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
      // if (response.status === 201) {
      //   const leaveAttribute: LeaveCreationAttributes = {
      //     ...leaveAttributes,
      //     leave_id: response.data as unknown as string,
      //     create_Update: "create",
      //   };
      //   const createLeave = await LeaveSystemRepository.execute(leaveAttribute);
      //   return {
      //     status: 201,
      //     message: "Leave created successfully",
      //     data: createLeave.data,
      //   };
      // }
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
        leaveAttributes?.leave_id ?? (() => { throw new Error("leave_id is required"); })(),
        leaveAttributes
      );
      // if (response.status === 201) {
      //   const leaveAttribute: LeaveCreationAttributes = {
      //     ...leaveAttributes,
      //     create_Update: "update",
      //   };
      //   const createLeave: LeaveResponse =
      //     await LeaveSystemRepository.updateLeave(
      //       leaveAttributes.leave_id,
      //       leaveAttribute
      //     );
      //   return {
      //     status: 201,
      //     message: "Leave updated successfully",
      //     data: createLeave.data,
      //   };
      // }

      return response;
    } catch (error) {
      throw errorHandler(error); // Consolidated error handling
    }
  }

  static async approvedLeave(
    leave_id: string,
    leaveApprovedAttributes: LeaveApproveAttributes
  ): Promise<LeaveResponse> {
    try {
      await updateleaveSchema.validate(leaveApprovedAttributes);

      const response = await LeaveExternalRepository.approvedLeave(
        leave_id,
        leaveApprovedAttributes
      );
      // if (response.status === 200) {
      //   const findLeaveAttributes = await LeavesQueryRepository.findAllLeaves(
      //     leave_id
      //   );
      //   const approveLeaveAttributes: Partial<LeaveApproveAttributes> = {
      //     ...findLeaveAttributes,
      //     create_Update: "Approved",
      //   };
      //   if (findLeaveAttributes) {
      //     await LeaveSystemRepository.approvedLeaves(leave_id, {
      //       ...approveLeaveAttributes,
      //       employee_code: approveLeaveAttributes.employee_code,
      //       leave_type: approveLeaveAttributes.leave_type,
      //       leave_status: approveLeaveAttributes.leave_status,
      //       approval_remarks: approveLeaveAttributes.approval_remarks,
      //     } as LeaveApproveAttributes);
      //   } else if (approveLeaveAttributes.leave_id) {
      //     await LeaveSystemRepository.execute(
      //       approveLeaveAttributes as LeaveCreationAttributes
      //     );
      //   } else {
      //     throw new Error("leave_id is required for execution");
      //   }
      // }
      return response;
    } catch (error) {
      throw errorHandler(error); 
    }
  }
}
export default new LeaveHandler();
