import React, { useState } from 'react';
import s from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import {
    countPages,
    countPaginationElements,
    filterPage
} from '../../bus/helper/componentsHelpers';

function Pagination({ onPageChange, perPage, totalItems, page, portionSize }) {
    let [portionNumber, setPortionNumber] = useState(1);

    const {
        pagesCount,
        portionCount,
        leftPortionPageNumber,
        rightPortionPageNumber
    } = countPaginationElements(totalItems, perPage, portionSize, portionNumber);

    const pages = countPages(pagesCount);

    const setPortionAndPage = (portionNumber, page) => {
        setPortionNumber(portionNumber);
        onPageChange(page);
    };
    return (
        <div className={s.wrapper}>
            {portionNumber > 1 && (
                <FontAwesomeIcon
                    onClick={() => {
                        setPortionAndPage(portionNumber - 1, leftPortionPageNumber - portionSize);
                    }}
                    className={s.portionButton}
                    icon={faCaretLeft}
                />
            )}
            {pages
                .filter((p) => filterPage(p, leftPortionPageNumber, rightPortionPageNumber))
                .map((p) => (
                    <button
                        key={p}
                        className={
                            page === p ? `${s.pageButton} ${s.pageButtonActive}` : `${s.pageButton}`
                        }
                        onClick={() => {
                            onPageChange(p);
                        }}>
                        {p}
                    </button>
                ))}
            {portionCount > portionNumber && (
                <FontAwesomeIcon
                    onClick={() => {
                        setPortionAndPage(portionNumber + 1, rightPortionPageNumber + 1);
                    }}
                    className={s.portionButton}
                    icon={faCaretRight}
                />
            )}
        </div>
    );
}
export default Pagination;
