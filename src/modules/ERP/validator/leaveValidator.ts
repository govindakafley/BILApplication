import * as yup from 'yup';

export const leaveSchema = yup.object().shape({
    employee_code: yup
    .string()
    .strict(true)
    .required('Employee code is required'),
    leave_type: yup
    .number()
    .strict(true) // Disables type coercion
    .required('Leave type is required'),
    leave_from_date: yup
    .string() 
    .strict(true) // Disables type coercion
   .required('Leave from date is required'),
    leave_to_date: yup
    .string()
    .strict(true) // Disables type coercion
    .required('Leave to date is required'),
    leave_half_day: yup
    .string()
    .strict(true) // Disables type coercion
    .required('Leave half day is required'),
    leave_day_shift: yup
    .string()
    .strict(true) // Disables type coercion
    .required('Leave day shift is required'),
    no_of_leave_day: yup
    .number()
    .strict(true) // Disables type coercion
    .required('No of leave day is required'),
    leave_total_days: yup
    .number()
    .strict(true) // Disables type coercion
    .required('Leave total days is required'),
    leave_reason: yup
    .string()
    .strict(true) // Disables type coercion
    .required('Leave reason is required'),
});

export const updateleaveSchema = yup.object({
    employee_code: yup
    .string()
    .strict(true) // Disables type coercion
    .required('Employee code is required'),
    leave_type: yup
    .number()
    .strict(true) // Disables type coercion
    .required('Leave type is required'),
    leave_status: yup
    .number()
    .strict(true) // Disables type coercion
    .required('Leave status is required'),
    approval_remarks:  yup
    .string()
    .strict(true) // Disables type coercion
    .required('Approval Remarks is required'),
})
  

export const LeaveBalanceSchema = yup.object({
  employee_name: yup
    .string()
    .required("Employee name is required"),

  basic_pay: yup
    .string()
    .required("Basic pay is required"),

  financial_year: yup
    .string()
    .matches(/^\d{4}$/, "Financial year must be a 4-digit year")
    .required("Financial year is required"),

  casual_leave_balance: yup
    .string()
    .required("Casual leave balance is required"),

  earned_leave_balance: yup
    .string()
    .required("Earned leave balance is required"),

  total_leave_balance: yup
    .number()
    .min(0, "Total leave balance must be non-negative")
    .required("Total leave balance is required"),
});
