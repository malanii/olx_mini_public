import { number, object } from 'yup';

export const cartQuantityValidation = {
    shape: {
        quantity: ''
    },
    schema: object().shape({
        quantity: number()
            .moreThan(0, 'Quantity must be greater than 0')
            .required('Quantity is required')
            .typeError('Must be a number')
    })
};
