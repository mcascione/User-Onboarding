import * as yup from 'yup';

const formSchema = yup.object().shape({
    first: yup
        .string()
        .trim()
        .required('first name is required')
        .min(2, 'first name must be two characters long'), 
    last: yup  
        .string()
        .trim()
        .required('last name is required')
        .min(2, 'last name must be two characters long'), 
    email: yup
        .string()
        .email('must be a valid email address')
        .required('email is required'),
    password: yup
        .string()
        .required('password is required')
        .min(6, 'password must be 6 characters long'),
    tos: yup
        .boolean()
        .oneOf([true], 'must accept the terms and conditions')        
});

export default formSchema;