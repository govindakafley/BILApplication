import * as yup from 'yup';

export const leaveSchema = yup.object().shape({
    employee_code: yup
    .string()
    .required('Employee code is required'),
    leave_type: yup
    .number()
    .required('Leave type is required'),
    leave_from_date: yup
    .string() 
   .required('Leave from date is required'),
    leave_to_date: yup
    .string()
    .required('Leave to date is required'),
    leave_half_day: yup
    .string()
    .required('Leave half day is required'),
    leave_day_shift: yup
    .string()
    .required('Leave day shift is required'),
    no_of_leave_day: yup
    .number()
    .required('No of leave day is required'),
    leave_total_days: yup
    .number()
    .required('Leave total days is required'),
    leave_reason: yup
    .string()
    .required('Leave reason is required'),
});

export const updateleaveSchema = yup.object({
    employee_code: yup
    .string()
    .required('Employee code is required'),
    leave_type: yup
    .number()
    .required('Leave type is required'),
    leave_status: yup
    .number()
    .required('Leave status is required'),
    approval_remarks:  yup
    .string()
    .required('Approval Remarks is required'),
})
  ;
