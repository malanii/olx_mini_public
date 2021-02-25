import React from 'react';
import s from './style.module.scss';
import LinkButton from '../common/LinkButton';
import { LinkButtons, Images } from '../../settings/componentsData';
import Wrapper from '../common/Wrapper';

const { text, path } = LinkButtons.error404;
const { error } = Images;

function Error404() {
    return (
        <Wrapper>
            <img alt={error.alt} className={s.img} src={error.src} />
            <LinkButton text={text} path={path} />
        </Wrapper>
    );
}
export default Error404;
