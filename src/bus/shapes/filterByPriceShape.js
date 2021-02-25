import { object, number, ref } from 'yup';

export const filterByPriceValidation = {
    shape: {
        min: '',
        max: ''
    },
    schema: object().shape({
        min: number().integer().notRequired().default(1).typeError('Must be a number'),
        max: number()
            .moreThan(0, 'Price must be greater than 0')
            .integer()
            .moreThan(ref('min'), 'MaxPrice must be greater than MinPrice')
            .typeError('Must be a number')
    })
};
