import React, { useEffect } from 'react';
import s from '../FormModal/style.module.scss';
import Input from './ModalInput';
import ModalSelect from './ModalSelect';
import ModalBtn from './ModalBtn';
import { Buttons } from '../../../settings/componentsData';
import { useDispatch, useSelector } from 'react-redux';
import { productsOrigins } from '../../../selectors';
import { changeFieldsName } from '../../../bus/helper/componentsHelpers';
import { start } from '../FormModal/originsSlice';

const { modal } = Buttons;

function FormModal({
    loading,
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
    placeholder
}) {
    const { data } = useSelector(productsOrigins);
    const changedDataArr = changeFieldsName(data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(start());
    }, [dispatch]);

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.wrapperInput}>
                <Input
                    type="text"
                    name="name"
                    onBlur={handleBlur}
                    placeholder={placeholder.name}
                    error={errors.name}
                    value={values.name}
                    onChange={handleChange}
                    touched={touched.name}
                    isSubmitting={loading}
                />
            </div>

            <div className={s.wrapperInput}>
                <Input
                    type="number"
                    name="price"
                    onBlur={handleBlur}
                    placeholder={placeholder.price}
                    error={errors.price}
                    value={values.price}
                    onChange={handleChange}
                    touched={touched.price}
                    isSubmitting={loading}
                />
            </div>
            <div className={s.wrapperInput}>
                <ModalSelect
                    items={changedDataArr}
                    value={values.origin}
                    setFieldValue={setFieldValue}
                    error={errors.origin}
                />
            </div>
            <ModalBtn text={modal.name} loading={loading} />
        </form>
    );
}

export default FormModal;
