import * as yup from "yup";

export const trainingValidatorSchema = yup.object({
  employee_code: yup
    .string()
    .strict(true)
    .required("Employee code is required"),

  training_type: yup
    .number()
    .strict(true)
    .typeError("Training type must be a number")
    .required("Training type is required"),

  training_category: yup
    .number()
    .strict(true)
    .typeError("Training category must be a number")
    .required("Training category is required"),

  training_course: yup
    .string()
    .strict(true)
    .required("Training course is required"),

  training_institute_name: yup
    .string()
    .strict(true)
    .required("Training institute name is required"),

  training_country: yup
    .number()
    .strict(true)
    .typeError("Training country must be a number")
    .required("Training country is required"),

  training_expense_applicable: yup
    .string()
    .required("Training expense applicability is required"),

  training_fund: yup
    .array()
    .of(yup.number().strict(true).typeError("Each training fund must be a number"))
    .min(1, "At least one training fund is required")
    .required("Training fund is required"),

  training_from_date: yup
    .string()
    .strict(true)
    .required("Training from date is required"),

  training_end_date: yup
    .string()
    .strict(true)
    .required("Training end date is required"),

  training_duration: yup
    .number()
    .strict(true)
    .typeError("Training duration must be a number")
    .required("Training duration is required"),

  training_need_advance: yup
    .string()
    .nullable()
    .oneOf(["Y", null], "Training need advance must be 'Y' or null"),

  training_advance_amount: yup
    .string()
    .strict(true)
    .when("training_need_advance", {
      is: "Y",
      then: schema => schema.required("Advance amount is required when advance is needed"),
      otherwise: schema => schema.notRequired(),
    }),

  training_description: yup
    .string()
    .strict(true)
    .required("Training description is required")
})
.strict()
.noUnknown(true, "Unknown fields are not allowed");
