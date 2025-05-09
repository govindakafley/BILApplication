export type SalaryAdvanceAttributes = {
    employee_code: string;
    employee_id: string;
    employee_name: string
    gross_salary: string;
    applicable_advance_amt: number
    monthly_installment_amt: number
}

export interface SalaryResponseAttributes {
   status: number
   message: string
   data: Array<SalaryAdvanceAttributes>
}