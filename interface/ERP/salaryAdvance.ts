import { Optional } from "sequelize";

export type SalaryAdvanceAttributes = {
    id?: number;
    advance_id?: string;
    employee_code: string;
    gross_salary: string;
    applicable_advance_amt: number
    monthly_installment_amt: number
    salary_advance_amt?: number
    salary_purpose?: string
}

export interface SalaryResponseAttributes {
   status: number
   message: string
   data: Array<SalaryAdvanceAttributes>
}

export interface SalaryCreationAttributes extends Optional<SalaryAdvanceAttributes, 'id'| 'advance_id'>{}