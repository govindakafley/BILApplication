import * as yup from 'yup';

const rolePermissionSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(12, 'Username must be at least 12 characters')
    .max(30, 'Username must be at most 30 characters'),
});

export default rolePermissionSchema;