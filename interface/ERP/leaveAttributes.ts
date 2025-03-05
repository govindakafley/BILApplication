import { Optional } from "sequelize";

export interface  LeaveAttributes {
    employee_code: string;
    employee_id: string;
    email: string;
    leave_type: number;
    leave_from_date: Date;
    leave_to_date: Date;
    leave_half_day: Array<string>;
    leave_day_shift:Array<string>;
    no_of_leave_day: number;
    leave_total_days: number;
    leave_reason: string;
}
export interface LeaveResponse {
    status: number;
    message: string;
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


export interface LeaveCreationAttributes extends Optional<LeaveAttributes,'employee_id'|'email'> {}