import React, { useMemo } from 'react';
import s from './style.module.scss';
import classNames from 'classnames';
import ValidationErrorMessage from '../../../common/ValidationErrorMessage';

function Input({ error, value, touched, type, onChange, placeholder, isSubmitting, ...props }) {
    const hasError = useMemo(() => error && touched, [error, touched]);
    const inputStyle = useMemo(
        () =>
            classNames(s.inputStyle, {
                [s.inputDisable]: isSubmitting
            }),
        [isSubmitting]
    );
    return (
        <>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={inputStyle}
                placeholder={placeholder}
                disabled={isSubmitting}
                {...props}
            />
            {hasError && <ValidationErrorMessage text={error} />}
        </>
    );
}

export default Input;
