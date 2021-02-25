import React from 'react';
import s from './style.module.scss';

const Wrapper = ({ children }) => {
    return <div className={s.wrapper}>{children}</div>;
};

export default Wrapper;
