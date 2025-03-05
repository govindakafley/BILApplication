import * as yup from 'yup';

// Define the validation schema
const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(12, 'Username must be at least 12 characters')
    .max(30, 'Username must be at most 30 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be at most 20 characters'),
});

export default loginSchema;