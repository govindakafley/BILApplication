import { Optional } from "sequelize";

export type SalaryAdvanceAttributes = {
    id?: number;
    advance_id?: string;
    employee_code: string;
    gross_salary: string;
    applicable_advance_amt: number
    monthly_installment_amt: number
    salary_advance_amt?: number
    salary_purpose?: string;
    take_home_pay?: string;
    create_update?: string;
    approval_remarks?: string;
    sa_status?: number
    sa_id?: string
    sa_request_advance_amt?: number
    sa_monthly_installment?: number
}

export interface SalaryResponseAttributes {
   status: number
   message: string
   data: Array<SalaryAdvanceAttributes>
}

export interface SalaryCreationAttributes extends Optional<SalaryAdvanceAttributes, 'id'| 'advance_id'>{}