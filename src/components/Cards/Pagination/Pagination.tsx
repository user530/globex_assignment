import React from 'react';
import { Pagination, PaginationButton, PaginationIndicator } from './Pagination.styled';

interface IPagination {
    currentPage: number;
    totalPages: number;
    changePageHandler: (newPage: number) => void;
}

export const PaginationBlock: React.FC<IPagination> = ({ currentPage, totalPages, changePageHandler }) => {
    if (totalPages === 1)
        return <></>;

    const nextPageHandler = () => changePageHandler(currentPage + 1);
    const prevPageHandler = () => changePageHandler(currentPage - 1);
    const firstPageHandler = () => changePageHandler(1);
    const lastPageHandler = () => changePageHandler(totalPages);

    return (
        <Pagination>
            {
                currentPage > 2 && <PaginationButton onClick={firstPageHandler}>--</PaginationButton>
            }

            {
                currentPage > 1 && <PaginationButton onClick={prevPageHandler}>-</PaginationButton>
            }

            <PaginationIndicator>{currentPage}</PaginationIndicator>

            {
                currentPage + 1 <= totalPages && <PaginationButton onClick={nextPageHandler}>+</PaginationButton>
            }

            {
                currentPage + 2 <= totalPages && <PaginationButton onClick={lastPageHandler}>++</PaginationButton>
            }

        </Pagination>
    );
}