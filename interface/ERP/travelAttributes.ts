import { Optional } from "sequelize";

export type TravelAttributes = {
  id?: number;
  travel_id?: string;
  employee_code: string;
  travel_type: number;
  travel_status: number;
  travel_purpose: number;
  travel_expense_applicable: string; //Yes or No
  travel_funding: number;
  travel_mode: number;
  travel_from_date: Date;
  travel_to_date: Date;
  travel_duration: number;
  travel_advance_amount: number;
  travel_from_place: string;
  travel_to_place: string;
  travel_description: string;
  create_Update: string;
};

export interface EmployeeCodeAttributes {
  employee_code: string;
}

export interface LeaveApprovedAttributes {
  employee_code: string;
  encash_id: string;
  encash_amount: number;
  encash_status: number;
  approval_remarks: string;
}
export type TravelResponse = {
  status: number;
  message: string;
  data: any;
};

export type TravelVerifyAttributes = {
  employee_code: string;
  travel_status: number;
  travel_remarks: string;
};
export interface TravelCreationAttributes
  extends Optional<TravelAttributes, "id" | "travel_id"> {}
