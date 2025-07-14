export type EmployeeAttributes = {
    id: number;
    name: string;
    employee_code: string;
    email: string;
    employee_id: string;
    department: string;
    designation: string;
    joining_date: string;
    status: string;
}
export type BranchAttributes = {
    id: number;
    name: string;
}
export type BranchResponse = {
    status: number;
    message: string;
    data: Array<BranchAttributes[]>;}
