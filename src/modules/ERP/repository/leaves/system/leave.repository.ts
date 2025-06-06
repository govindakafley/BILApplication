import {
  leaveApplicateAttributes,
  LeaveApproveAttributes,
  LeaveCreationAttributes,
  LeaveQueryResponse,
  returnResponse,
} from "../../../../../../interface/ERP/leaveAttributes";
import errorHandler from "../../../../../middleware/errorHandler/commonErrorHandler";
import {
  DataBaseError,
} from "../../../../../middleware/errorHandler/error.handler";
import Leave from "../../../model/createLeave.model";
import LeavesQueryRepository from "./leave.query.repository";

export class LeaveSystemRepository extends LeavesQueryRepository {
  
  static async execute(
    leaveAttributes: LeaveCreationAttributes
  ): Promise<LeaveQueryResponse> {
    try {
      const createdLeave = await Leave.create(leaveAttributes);
      return {
        status: 201,
        message: "Leave created successfully",
        data: createdLeave.toJSON() as leaveApplicateAttributes};
    } catch (error) {
      throw errorHandler(error);  // Consolidated error handling
    }
  }
static async leaveSystemUpdate(  leave_id: string, leaveAttributes: LeaveCreationAttributes): Promise<any> {
  try{
     const response = await Leave.update(leaveAttributes,{
      where: {leave_id: leave_id }
     })
     return response;
  }catch(error){

  }

  }
  static async updateLeave(
    leave_id: string,
    leaveAttributes: LeaveCreationAttributes
  ): Promise<returnResponse> {
    try {
      const existingLeaves = await LeavesQueryRepository.findAllLeaves("",leave_id, 10);
      
      if (existingLeaves.length === 0) {
        return LeaveSystemRepository.execute(leaveAttributes);
      }

      await LeaveSystemRepository.leaveSystemUpdate(leave_id, leaveAttributes);
      
      return {
        status: 201,
        message: "Leave updated successfully",
      };
    } catch (error) {
      throw errorHandler(error);  // Consolidated error handling
    }
  }
  static async approvedLeaves(leave_id:string, leaveApprovedAttributes: LeaveApproveAttributes): Promise<returnResponse> {
    try{
       await Leave.update(leaveApprovedAttributes,{ where: {leave_id} })
      return {
        status: 201,
        message: "Leave updated successfully",        
      };
    }catch(error){
      throw errorHandler(error);  // Consolidated error handling

    }
  }
}
