import React from 'react';
import FormModal from '../FormModal';
import { Formik } from 'formik';
import { modalValidation } from '../../../bus/shapes/modalShape';
import { ModalInputs } from '../../../settings/componentsData';
import { useDispatch } from 'react-redux';
import { start } from '../../../pages/Modal/ModalAddNewProduct/newProductSlice';

function FormikAddProduct({ loading }) {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={modalValidation.shape}
            validationSchema={modalValidation.schema}
            onSubmit={(values) => {
                dispatch(start(values));
            }}>
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                handleChange,
                setFieldValue
            }) => (
                <FormModal
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    loading={loading}
                    placeholder={ModalInputs}
                    setFieldValue={setFieldValue}
                />
            )}
        </Formik>
    );
}

export default FormikAddProduct;
