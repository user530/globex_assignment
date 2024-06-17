import React from 'react';
import { Cards, CardsPlaceholder, Spinner } from './Cards.styled';
import { UserCard } from './UserCard/UserCard';
import { User } from '../../types';
import { PaginationBlock } from './Pagination/Pagination';

interface IUserCards {
    users: User[];
    cardClickHandler: (user: User) => void;
    isLoading: boolean;
}

export const UserCards: React.FC<IUserCards> = ({ users, cardClickHandler, isLoading }) => {
    const CARDS_PER_PAGE = 6;
    const [currentPage, setCurrentPage] = React.useState<number>(1);
    const totalPages = Math.ceil(users.length / CARDS_PER_PAGE);
    const [visibleUsers, setVisibleUsers] = React.useState<User[]>([]);

    const changePageHandler = React.useCallback((newPage: number) => setCurrentPage(newPage), [setCurrentPage]);

    // Updated visible users
    React.useEffect(
        () => {
            setVisibleUsers(
                users.slice(
                    (currentPage - 1) * CARDS_PER_PAGE,
                    Math.min(users.length, currentPage * CARDS_PER_PAGE)
                )
            );
        },
        [users, currentPage, CARDS_PER_PAGE]
    );

    // Reset the pagination on data update
    React.useEffect(
        () => {
            setCurrentPage(1);
        },
        [users]
    );

    return (
        isLoading
            ? (
                <CardsPlaceholder>
                    <Spinner />
                </CardsPlaceholder>
            )
            : visibleUsers.length > 0
                ? (
                    <>
                        <Cards>
                            {
                                visibleUsers.map(
                                    (user, ind) => <UserCard key={ind} user={user} clickHandler={cardClickHandler} />
                                )
                            }
                        </Cards>
                        <PaginationBlock currentPage={currentPage} totalPages={totalPages} changePageHandler={changePageHandler} />
                    </>
                )
                : (
                    <CardsPlaceholder>
                        NO USERS TO SHOW
                    </CardsPlaceholder>
                )
    );
}