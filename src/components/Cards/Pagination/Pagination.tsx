import React from 'react';
import { Pagination, PaginationButton, PaginationIndicator } from './Pagination.styled';
import { CustomIcon } from '../../Icon/Icon';

interface IPagination {
    currentPage: number;
    totalPages: number;
    changePageHandler: (newPage: number) => void;
}

export const PaginationBlock: React.FC<IPagination> = ({ currentPage, totalPages, changePageHandler }) => {
    // Amount of pages to scroll on the big swipe
    const BIG_SWIPE = 5;

    if (totalPages === 1)
        return <></>;

    const nextPageHandler = () => changePageHandler(Math.min(totalPages, currentPage + 1));
    const prevPageHandler = () => changePageHandler(Math.max(1, currentPage - 1));
    const nextBigSwipeHandler = () => changePageHandler(Math.min(totalPages, currentPage + BIG_SWIPE));
    const prevBigSwipeHandler = () => changePageHandler(Math.max(1, currentPage - BIG_SWIPE));

    return (
        <Pagination>
            <PaginationButton
                onClick={prevBigSwipeHandler}
                disabled={currentPage < 1 + BIG_SWIPE}
            >
                <CustomIcon name={`chevronLeft`} />
            </PaginationButton>

            <PaginationButton
                onClick={prevPageHandler}
                disabled={currentPage <= 1}
            >
                <CustomIcon name={`angleLeft`} />
            </PaginationButton>

            <PaginationIndicator>{`${currentPage} / ${totalPages}`}</PaginationIndicator>

            <PaginationButton
                onClick={nextPageHandler}
                disabled={currentPage >= totalPages}
            >
                <CustomIcon name={`angleRight`} />
            </PaginationButton>

            <PaginationButton
                onClick={nextBigSwipeHandler}
                disabled={currentPage > totalPages - BIG_SWIPE}
            >
                <CustomIcon name={`chevronRight`} />
            </PaginationButton>


        </Pagination>
    );
}