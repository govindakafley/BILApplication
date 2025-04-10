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
  ;
