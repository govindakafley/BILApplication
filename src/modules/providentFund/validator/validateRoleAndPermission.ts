import * as yup from 'yup';

const rolePermissionSchema = yup.object().shape({
  email: yup.string()
    .email()
    .required('Email is required')
});

export default rolePermissionSchema;