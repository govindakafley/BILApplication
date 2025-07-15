import * as yup from 'yup';
export const EmployeeCodeValidatorSchema = yup.object({
  employee_code: yup
    .string()
    .strict(true)
    .required('Employee code is required')
});
export const TravelValidatorSchema = yup.object({
  employee_code: yup
    .string()
    .strict(true)
    .required('Employee code is required'),

  travel_type: yup
    .number()
    .strict(true)
    .integer()
    .required('Travel type is required'),

  travel_purpose: yup
    .number()
    .strict(true)
    .integer()
    .required('Travel purpose is required'),

  travel_expense_applicable: yup
    .string()
    .strict(true)
    .oneOf(['Yes', 'No'], 'Travel expense applicable must be either "Yes" or "No"')
    .required('Travel expense applicability is required'),

  travel_funding: yup
    .number()
    .strict(true)
    .integer()
    .required('Travel funding is required'),

  travel_mode: yup
    .number()
    .strict(true)
    .integer()
    .required('Travel mode is required'),

    travel_from_date: yup
    .date()
    .transform((value, originalValue) => {
      return originalValue ? new Date(originalValue) : null;
    })
    .typeError('Travel from date must be a valid date')
    .required('Travel from date is required'),
  
  travel_to_date: yup
    .date()
    .transform((value, originalValue) => {
      return originalValue ? new Date(originalValue) : null;
    })
    .typeError('Travel to date must be a valid date')
    .required('Travel to date is required'),

  travel_duration: yup
    .number()
    .integer()
    .strict(true)
    .positive('Travel duration must be positive')
    .required('Travel duration is required'),

  travel_advance_amount: yup
    .number()
    .strict(true)
    .min(0, 'Travel advance amount cannot be negative')
    .required('Travel advance amount is required'),

  travel_from_place: yup
    .string()
    .strict(true)
    .required('Travel from place is required'),

  travel_to_place: yup
    .string()
    .strict(true)
    .required('Travel to place is required'),

  travel_description: yup
    .string()
    .strict(true)
    .required('Travel description is required'),
});

export const TravelValidatorApprovedSchema = yup.object({
  employee_code: yup
    .string()
    .strict(true)
    .required('Employee code is required'),
  travel_bill_id: yup
    .string()
    .strict(true)
    .required('Travel bill ID is required'),
  travel_bill_status: yup
    .number() 
    .strict(true)
    .integer()
    .required('Travel bill status is required'),
  travel_bill_remarks: yup
    .string()
    .strict(true)
    .required('Travel bill remarks are required'),
})

