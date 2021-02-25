import { object, string, number } from 'yup';

export const modalValidation = {
    shape: {
        name: '',
        price: '',
        origin: ''
    },
    schema: object().shape({
        name: string()
            .matches(/(?=.*?[A-Za-z])/, 'Need only letters')
            .min(3, 'Need min 3 letters')
            .max(20, 'Need max 20 letters')
            .required('Name is required'),
        price: number()
            .moreThan(0, 'Price must be greater than 0')
            .required('Price is required')
            .typeError('Must be a number'),
        origin: string().required('Origin is required')
    })
};
