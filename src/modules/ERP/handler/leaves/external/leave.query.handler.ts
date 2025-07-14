import { UserCreationAttributes } from "../../../../../../interface/auth/LoginAttributes";
import { LeaveQueryResponse, LeaveTypeResponse } from "../../../../../../interface/ERP/leaveAttributes";
import { DataBaseError, NotFoundError } from "../../../../../middleware/errorHandler/error.handler";
import { CacheManager } from "../../../../../utility/cacheManager";
import { LeaveQueryRepository } from "../../../repository/leaves/external/leave.query.repository";
import { LeaveExternalRepository } from "../../../repository/leaves/external/leave.repository";

class LeaveQueryHandler implements LeaveQueryRepository, LeaveExternalRepository {
  private cacheManager: CacheManager;
  constructor(){
    this.cacheManager = new CacheManager();
  }
   async fetchAllApprovalLeaves(UserAttributes: Partial<UserCreationAttributes>) : Promise<LeaveQueryResponse>{
    try{
      const cacheKey = 'fetchAllApprovalLeaves'+UserAttributes.employee_code
      const employee_code = JSON.stringify(cacheKey);
      if(this.cacheManager.has(employee_code)){
        return this.cacheManager.get(employee_code)!;
      }
        const leaveQuery:LeaveQueryResponse  = await LeaveQueryRepository.fetchAllApprovalLeaves(UserAttributes);

        this.cacheManager.set(employee_code, leaveQuery);
        return {
          status: 200,
          message: "Leave fetched successfully",
          data: leaveQuery.data,
        };
    } catch(error){
        throw new NotFoundError(`${error}`);
    }
  }
   async findAllLeavesType(): Promise<LeaveTypeResponse> {
    try {
      if(this.cacheManager.has('leaveType')){
        return this.cacheManager.get<LeaveTypeResponse>('leaveType')!;
      }
      const response: LeaveTypeResponse = await LeaveExternalRepository.findAllLeavesTypes();
      this.cacheManager.set('leaveType', response);
      return response;
    } catch (error) {
      throw new DataBaseError(`${error}`);
    }
  }
  async leaveapplicant(UserAttributes: Partial<UserCreationAttributes>): Promise<LeaveQueryResponse> {
    try {
      const cacheKey = 'leaveapplicant' + UserAttributes.employee_code;
      if (this.cacheManager.has(cacheKey)) {
        return this.cacheManager.get<LeaveQueryResponse>(cacheKey)!;
      }
      const response: LeaveQueryResponse = await LeaveQueryRepository.fetchAllLeaves(UserAttributes);
      this.cacheManager.set(cacheKey, response);
      return response;
    } catch (error) {
      throw new DataBaseError(`${error}`);
    }
  }
} 
export default new LeaveQueryHandler();
