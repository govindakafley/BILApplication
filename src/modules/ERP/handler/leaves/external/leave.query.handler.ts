import { UserCreationAttributes } from "../../../../../../interface/auth/LoginAttributes";
import { LeaveQueryResponse, LeaveTypeResponse } from "../../../../../../interface/ERP/leaveAttributes";
import { DataBaseError, NotFoundError } from "../../../../../middleware/errorHandler/error.handler";
import { LeaveQueryRepository } from "../../../repository/leaves/external/leave.query.repository";
import { LeaveExternalRepository } from "../../../repository/leaves/external/leave.repository";

class LeaveQueryHandler implements LeaveQueryRepository, LeaveExternalRepository {
   async fetchAllLeaves(UserAttributes: UserCreationAttributes) : Promise<LeaveQueryResponse>{
    try{
        const leaveQuery:LeaveQueryResponse  = await LeaveQueryRepository.fetchAllLeaves(UserAttributes);
        return leaveQuery;
    } catch(error){
        throw new NotFoundError(`${error}`);
    }
  }
   async findAllLeavesType(): Promise<LeaveTypeResponse> {
    try {
      const response: LeaveTypeResponse = await LeaveExternalRepository.findAllLeavesTypes();
      return response;
    } catch (error) {
      throw new DataBaseError(`${error}`);
    }
  }
} 
export default new LeaveQueryHandler();
