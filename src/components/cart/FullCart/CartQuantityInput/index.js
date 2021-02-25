import React from 'react';
import { Formik } from 'formik';
import { cartQuantityValidation } from '../../../../bus/shapes/cartQuantityShape';
import { setQuantity } from '../../../../pages/CartPage/cartSlice';
import { useDispatch } from 'react-redux';
import s from './style.module.scss';
import ValidationErrorMessage from '../../../common/ValidationErrorMessage';

function CartQuantityInput({ element, quantity }) {
    const quantityToInitialVal = { quantity: quantity };
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={quantityToInitialVal}
            enableReinitialize={true}
            validationSchema={cartQuantityValidation.schema}
            onSubmit={(values) => {
                dispatch(setQuantity([element, values.quantity]));
            }}>
            {({ values, errors, touched, handleBlur, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit} className={s.form}>
                    <input
                        type="number"
                        name="quantity"
                        onBlur={handleBlur}
                        value={values.quantity}
                        className={s.input}
                        onChange={(e) => {
                            handleChange(e);
                            setTimeout(handleSubmit, 0);
                        }}
                    />
                    <div className={s.errorWrapper}>
                        {errors.quantity && touched.quantity && (
                            <ValidationErrorMessage text={errors.quantity} />
                        )}
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default CartQuantityInput;
