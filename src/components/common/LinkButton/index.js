import React from 'react';
import s from './style.module.scss';
import { Link } from 'react-router-dom';

function LinkButton({ path, text }) {
    return (
        <Link className={s.btn} to={path}>
            {text}
        </Link>
    );
}
export default LinkButton;
