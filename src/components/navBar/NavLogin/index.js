import React from 'react';
import s from './style.module.scss';
import { Link } from 'react-router-dom';
import { LinkButtons } from '../../../settings/componentsData';

const { logIn, signUp } = LinkButtons;

function NavLogin() {
    return (
        <div className={s.wrapper}>
            <Link className={s.btn} to={logIn.path}>
                {logIn.text}
            </Link>
            <Link className={`${s.btn} ${s.btnWhite}`} to={signUp.path}>
                {signUp.text}
            </Link>
        </div>
    );
}
export default NavLogin;
