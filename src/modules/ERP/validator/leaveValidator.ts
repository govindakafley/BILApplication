import * as yup from 'yup';

const leaveSchema = yup.object().shape({
    employee_code: yup
    .string()
    .required('Employee code is required'),
    leave_type: yup
    .number()
    .required('Leave type is required'),
    leave_from_date: yup
    .array()
    .of(yup.string())
    .required('Leave from date is required'),
    leave_to_date: yup
    .array()
    .of(yup.string())
    .required('Leave to date is required'),
    leave_half_day: yup
    .array()
    .of(yup.string())
    .required('Leave half day is required'),
    leave_day_shift: yup
    .array()
    .of(yup.string())
    .required('Leave day shift is required'),
    no_of_leave_day: yup
    .array()
    .of(yup.number())
    .required('No of leave day is required'),
    leave_total_days: yup
    .number()
    .required('Leave total days is required'),
    leave_reason: yup
    .string()
    .required('Leave reason is required'),
  
});

export default leaveSchema;