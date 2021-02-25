import React from 'react';
import s from './style.module.scss';
import { Formik } from 'formik';
import { ProductsFilterTitles, Buttons } from '../../../settings/componentsData';
import { filterByPriceValidation } from '../../../bus/shapes/filterByPriceShape';
import ProductsFilterTitle from '../ProductsFilterTitle';
import ValidationErrorMessage from '../../common/ValidationErrorMessage';

const { filterPrice } = Buttons;

function ProductsFilterByPrice({ handleSubmitFilterByPrice, minPrice, maxPrice }) {
    const obj = { min: minPrice, max: maxPrice };
    return (
        <Formik
            initialValues={obj}
            enableReinitialize={true}
            validationSchema={filterByPriceValidation.schema}
            onSubmit={(values) => {
                handleSubmitFilterByPrice(values.min, values.max);
            }}>
            {({ values, errors, touched, handleBlur, handleSubmit, handleChange }) => (
                <div>
                    <ProductsFilterTitle text={ProductsFilterTitles.price} />
                    <form className={s.form} onSubmit={handleSubmit}>
                        <div className={s.inputWrapper}>
                            <input
                                onChange={handleChange}
                                className={s.formInput}
                                type="number"
                                name="min"
                                placeholder="min"
                                value={values.min}
                                onBlur={handleBlur}
                            />
                            <span className={s.formElement}>-</span>
                            <input
                                onChange={handleChange}
                                className={s.formInput}
                                type="number"
                                name="max"
                                placeholder="max"
                                value={values.max}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.min && touched.min ? (
                            <ValidationErrorMessage text={errors.min} />
                        ) : errors.max && touched.max ? (
                            <ValidationErrorMessage text={errors.max} />
                        ) : null}
                        <button className={s.formButton} type="submit">
                            {filterPrice.name}
                        </button>
                    </form>
                </div>
            )}
        </Formik>
    );
}
export default ProductsFilterByPrice;
