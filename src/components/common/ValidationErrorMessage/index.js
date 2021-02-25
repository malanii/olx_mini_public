import React from 'react';
import s from './style.module.scss';

function ValidationErrorMessage({ text }) {
    return <div className={s.errorText}>{text}</div>;
}
export default ValidationErrorMessage;
