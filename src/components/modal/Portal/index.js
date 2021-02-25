import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import s from './style.module.scss';

function Portal({ children, className = 'root-portal', el = 'div' }) {
    const [container] = useState(document.createElement(el));

    container.classList.add(className);

    useEffect(() => {
        document.body.appendChild(container);
        container.setAttribute('class', s.wrapper);
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.removeChild(container);
            document.body.style.overflow = 'auto';
        };
    }, [container]);

    return createPortal(children, container);
}

export default Portal;
