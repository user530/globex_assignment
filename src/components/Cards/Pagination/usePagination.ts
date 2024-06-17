interface IUsePaginationProps {
    currentPage: number;
    totalPages: number;
    pagesPerSwipe: number;
    currentPageSetter: (newPage: number) => void;
}

type IUsePagination = (props: IUsePaginationProps) => {
    nextPageHandler: () => void;
    prevPageHandler: () => void;
    nextSwipeHandler: () => void;
    prevSwipeHandler: () => void;
}

export const usePagination: IUsePagination = ({ currentPage, totalPages, pagesPerSwipe, currentPageSetter }) => {
    const nextPageHandler = () => currentPageSetter(Math.min(totalPages, currentPage + 1));
    const prevPageHandler = () => currentPageSetter(Math.max(1, currentPage - 1));
    const nextSwipeHandler = () => currentPageSetter(Math.min(totalPages, currentPage + pagesPerSwipe));
    const prevSwipeHandler = () => currentPageSetter(Math.max(1, currentPage - pagesPerSwipe));

    return {
        nextPageHandler,
        prevPageHandler,
        nextSwipeHandler,
        prevSwipeHandler,
    };
}