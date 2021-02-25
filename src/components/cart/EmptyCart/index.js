import React from 'react';
import s from './style.module.scss';
import { Images, ComponentsTitles } from '../../../settings/componentsData';
import Wrapper from '../../common/Wrapper';
import Title from '../../common/Title';

const { emptyCart } = Images;

function EmptyCart() {
    return (
        <Wrapper>
            <Title text={ComponentsTitles.emptyCart} />
            <img className={s.img} alt={emptyCart.alt} src={emptyCart.src} />
        </Wrapper>
    );
}
export default EmptyCart;
