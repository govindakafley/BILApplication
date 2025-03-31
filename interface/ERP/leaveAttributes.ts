import { Optional } from "sequelize";

// Base interface with common properties
interface BaseLeaveAttributes {
    leave_applicant_id?: string;
    employee_code?: string;
    employee_id?: string;
    email?: string;
    leave_type?: number;
    leave_reason?: string;
    leave_total_days?: number;
    create_Update?: string;
}

// Interface for single leave (non-array properties)
export interface LeaveAttributes extends BaseLeaveAttributes {
    leave_from_date?: Date;
    leave_to_date?: Date;
    leave_half_day?: string;
    leave_day_shift?: string;
    no_of_leave_day?: number;
}

// Interface for array leave properties
export interface LeaveAttributesArray extends Omit<BaseLeaveAttributes, keyof LeaveAttributes> {
    leave_from_date: Array<Date>;
    leave_to_date: Array<Date>;
    leave_half_day: Array<string>;
    leave_day_shift: Array<string>;
    no_of_leave_day: Array<number>;
}

export interface leaveApplicateAttributes {
    leave_applicant_id?: string;
}

export interface LeaveResponse {
    status?: number;
    message?: string;
    data?: leaveApplicateAttributes;
}

export interface LeaveTypeAttributes {
    id: number;
    name: string;
}

export interface LeaveTypeResponse {
    status: number;
    message: string;
    data: Array<LeaveTypeAttributes>;
}

export interface LeaveQueryResponse {
    status: number;
    message: string;
    data: leaveApplicateAttributes;
}

export interface LeaveApproveAttributes extends LeaveAttributes {
    leave_status?: number;
    approval_remarks?: string;
}

export interface returnResponse {
    status: number;
    message: string;
}

export interface LeaveCreationAttributes extends Optional<LeaveAttributes, 'employee_id' | 'email' | 'create_Update'> {}