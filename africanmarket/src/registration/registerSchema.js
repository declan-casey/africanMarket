import * as yup from 'yup';

const registerSchema = yup.object().shape({
    roleId: yup.string().required('must select a role'),
    username: yup
        .string()
        .required('username is required')
        .min(8, 'username must be 8+ characters'),
    password: yup
        .string()
        .required('password is required')
        .min(8, 'password must be 8+ characters'),

        // make required if roleId == 2
    store_name: yup
        .string(),
    store_category: yup
        .string()
})
export default registerSchema;