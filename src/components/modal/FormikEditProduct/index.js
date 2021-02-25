import React from 'react';
import FormModal from '../FormModal';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { modalValidation } from '../../../bus/shapes/modalShape';
import { ModalInputs } from '../../../settings/componentsData';
import { openSubmit } from '../../../pages/Modal/modalSlice';
import { update } from '../../../pages/Modal/ModalEditProduct/editProductSlice';

function FormikEditProduct({ data }) {
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={data}
            enableReinitialize={true}
            validationSchema={modalValidation.schema}
            onSubmit={(values) => {
                dispatch(openSubmit());
                dispatch(update(values));
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
                    loading={false}
                    placeholder={ModalInputs}
                    setFieldValue={setFieldValue}
                />
            )}
        </Formik>
    );
}

export default FormikEditProduct;
