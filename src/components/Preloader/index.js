import React from 'react';
import s from './style.module.scss';
import Wrapper from '../common/Wrapper';

function Preloader() {
    const n = 7;
    return (
        <Wrapper>
            <div className={s.container}>
                {[...Array(n)].map((e, i) => {
                    return <div key={i} className={i <= 2 ? `${s.circle}` : `${s.shadow}`}></div>;
                })}
            </div>
            <p className={s.text}>Loading</p>
        </Wrapper>
    );
}
export default Preloader;
