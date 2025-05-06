import { Optional } from "sequelize";

export interface  LeaveAttributesArray {
    leave_id?: string;
    employee_code: string;
    employee_id: string;
    email: string;
    leave_type: number;
    leave_from_date: Array<Date>;
    leave_to_date: Array<Date>;
    leave_half_day: Array<string>;
    leave_day_shift:Array<string>;
    no_of_leave_day: Array<number>;
    leave_total_days: number;
    leave_reason: string;
    create_Update?: string;
}
export interface  LeaveAttributes {
    leave_id: string;
    employee_code: string;
    leave_emp_code?: string;
    employee_id: string;
    email: string;
    leave_type: number;
    leave_from_date: Date;
    leave_to_date: Date;
    leave_half_day: string;
    leave_day_shift:string;
    no_of_leave_day: number;
    leave_total_days: number;
    leave_reason: string;
    create_Update?: string;
}
export interface leaveApplicateAttributes {
    leave_id?: string;
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
    employee_code: string;
    leave_type: number;
    leave_status: number;
    approval_remarks: string;
}
export interface returnResponse {
    status: number;
    message: string;
}

export interface LeaveCreationAttributes extends Optional<LeaveAttributes,'employee_id'|'email'|'create_Update' | 'leave_id'> {}