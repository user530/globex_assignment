import React from 'react';
import { Cards, CardsPlaceholder, Spinner } from './Cards.styled';
import { UserCard } from './UserCard/UserCard';
import { User } from '../../types';
import { PaginationBlock } from './Pagination/Pagination';
import { useCards } from './useCards';

interface IUserCards {
    users: User[];
    cardClickHandler: (user: User) => void;
    isLoading: boolean;
    cardsPerPage?: number;
    pagesPerSwipe?: number;
}

export const UserCards: React.FC<IUserCards> = ({ users, cardClickHandler, isLoading, cardsPerPage, pagesPerSwipe }) => {
    const CARDS_PER_PAGE = cardsPerPage ?? 6;

    const {
        currentPage,
        totalPages,
        visibleUsers,
        changePageHandler,
    } = useCards({
        users,
        cardsPerPage: CARDS_PER_PAGE,
    });

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
                        <PaginationBlock
                            currentPage={currentPage}
                            totalPages={totalPages}
                            changePageHandler={changePageHandler}
                            pagesPerSwipe={pagesPerSwipe}
                        />
                    </>
                )
                : (
                    <CardsPlaceholder>
                        NO USERS TO SHOW
                    </CardsPlaceholder>
                )
    );
}