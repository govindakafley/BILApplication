import { Optional } from "sequelize";

export type SalaryAdvanceAttributes = {
    id?: number;
    sa_id?: string;
    employee_code: string;
    gross_salary?: string;
    applicable_advance_amt?: number
    monthly_installment_amt?: number
    salary_advance_amt?: number
    salary_purpose?: string;
    sa_status?:number
    approval_remarks?: string;
    sa_request_advance_amt?: number;
    sa_monthly_installment?: number;
    take_home_salary?: number,
    take_home_percentage?: number
}

export interface SalaryResponseAttributes {
   status: number
   message: string
   data: SalaryAdvanceAttributes
}

export interface SalaryCreationAttributes extends Optional<SalaryAdvanceAttributes, 'id'| 'sa_id'>{}