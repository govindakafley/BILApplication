import { Optional } from "sequelize";

export interface RefundAttributes {
 id?: number;
 reference_no: string;
 employee_name: string;
 company_name: string;
 identification_no: string;
 amount: string;
 email: string;
 employee_id: string;
 employee_code: string;
}
export interface refundResponse {
    message: string;
    status: number;
    data: Array<RefundAttributes>
}

export interface RefundCreationAttributes extends Optional<RefundAttributes, 'id'> {}
