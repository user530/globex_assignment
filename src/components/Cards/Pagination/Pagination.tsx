import React from 'react';
import { Pagination, PaginationButton, PaginationIndicator } from './Pagination.styled';
import { CustomIcon } from '../../Icon/Icon';
import { usePagination } from './usePagination';

interface IPagination {
    currentPage: number;
    totalPages: number;
    changePageHandler: (newPage: number) => void;
    pagesPerSwipe?: number;
}

export const PaginationBlock: React.FC<IPagination> = ({ currentPage, totalPages, changePageHandler, pagesPerSwipe }) => {
    // Amount of pages to scroll on the big swipe
    const PAGES_PER_SWIPE = pagesPerSwipe ?? 5;

    const {
        nextPageHandler,
        prevPageHandler,
        nextSwipeHandler,
        prevSwipeHandler,
    } = usePagination(
        {
            currentPage,
            totalPages,
            pagesPerSwipe: PAGES_PER_SWIPE,
            currentPageSetter: changePageHandler
        }
    );

    return (
        totalPages === 1
            ? <></>
            : (
                <Pagination>
                    <PaginationButton
                        onClick={prevSwipeHandler}
                        disabled={currentPage < 1 + PAGES_PER_SWIPE}
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
                        onClick={nextSwipeHandler}
                        disabled={currentPage > totalPages - PAGES_PER_SWIPE}
                    >
                        <CustomIcon name={`chevronRight`} />
                    </PaginationButton>
                </Pagination>
            )
    );
}