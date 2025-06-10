export type TrainingTypes = {
    id: number
    name: string
}

export type TrainingAttributes = {
    id?: number
    training_id?: string
    employee_code: string;
    training_type: number;
    training_category: number;
    training_course: string;
    training_institute_name: string;
    training_country: number;
    training_expense_applicable: "Yes" | "No"; // Assuming only "Yes" or "No" are valid
    training_fund: number[]; // Array of fund IDs
    training_from_date: string; // ISO date string e.g., "2025-05-03"
    training_end_date: string;   // ISO date string e.g., "2025-05-10"
    training_duration: string; // in days
    training_need_advance: "Y" | null; // Can be 'Y' or null
    training_advance_amount: string; // Assuming it's a string, could be converted to number if preferred
    training_description: string;
    create_update?: string
          
  };
  export type TrainingResponse = {
    status: number,
    message: string
    data: string | Array<TrainingAttributes>
  }

  export interface TrainingVerification extends TrainingAttributes  {
    employee_code: string;
    training_status: number
    approval_remarks: string
  }

  export type TrainingBillClaim = {
  training_bil_id: number;
  emp_employee_number: string;
  emp_full_name: string;
  branch_name: string;
  training_bill_balance_claim_amount: string; // or number, if parsed
  training_bill_claim_date: string; // could be Date if parsed
  status_name: string;
};
export type TrainingBillClaimResponse = {
  status: number;
  message: string;
  data: TrainingBillClaim[];
};

  