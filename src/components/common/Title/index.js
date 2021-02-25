import React from 'react';
import s from './style.module.scss';

function Title({ text }) {
    return <p className={s.title}>{text}</p>;
}
export default Title;
