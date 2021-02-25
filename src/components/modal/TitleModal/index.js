import React from 'react';
import s from './style.module.scss';

function TitleModal({ title }) {
    return <h2 className={s.title}>{title}</h2>;
}
export default TitleModal;
