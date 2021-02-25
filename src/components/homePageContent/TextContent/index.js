import React from 'react';
import s from './style.module.scss';
import LinkButton from '../../common/LinkButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkButtons, homePageIcons, HomePageText } from '../../../settings/componentsData';

const { text, path } = LinkButtons.homepage;

function TextContent() {
    return (
        <div className={s.wrapper}>
            <p className={s.title}>{HomePageText.title}</p>
            <p className={s.text}>{HomePageText.description}</p>
            <LinkButton text={text} path={path} />
            <div className={s.iconsWrapper}>
                {homePageIcons.map((item) => (
                    <FontAwesomeIcon key={item.id} className={s.icon} icon={item.icon} />
                ))}
            </div>
        </div>
    );
}
export default TextContent;
