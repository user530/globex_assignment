import React from 'react';
import { User } from '../../types';

interface IUseCardsProps {
    users: User[];
    cardsPerPage: number;
}

type IUseCards = (props: IUseCardsProps) => {
    totalPages: number;
    currentPage: number;
    visibleUsers: User[];
    changePageHandler: (newPage: number) => void;
}

export const useCards: IUseCards = ({ users, cardsPerPage }) => {
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const totalPages = Math.ceil(users.length / cardsPerPage);
    const [visibleUsers, setVisibleUsers] = React.useState<User[]>([]);

    const changePageHandler = React.useCallback((newPage: number) => setCurrentPage(newPage), [setCurrentPage]);

    // Updated visible users
    React.useEffect(
        () => {
            setVisibleUsers(
                users.slice(
                    (currentPage - 1) * cardsPerPage,
                    Math.min(users.length, currentPage * cardsPerPage)
                )
            );
        },
        [users, currentPage, cardsPerPage]
    );

    // Reset the pagination on data update
    React.useEffect(
        () => {
            setCurrentPage(1);
        },
        [users]
    );

    return {
        totalPages,
        currentPage,
        visibleUsers,
        changePageHandler,
    };
}