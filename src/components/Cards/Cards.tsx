import React from 'react';
import { Cards, CardsPlaceholder, Spinner } from './Cards.styled';
import { UserCard } from './UserCard/UserCard';
import { User } from '../../types';

interface IUserCards {
    users: User[];
    cardClickHandler: (user: User) => void;
    isLoading: boolean;
}

export const UserCards: React.FC<IUserCards> = ({ users, cardClickHandler, isLoading }) => {
    return (
        isLoading
            ? (
                <CardsPlaceholder>
                    <Spinner />
                </CardsPlaceholder>
            )
            : users.length > 0
                ? (
                    <Cards>
                        {
                            users.map(
                                (user, ind) => <UserCard key={ind} user={user} clickHandler={cardClickHandler} />
                            )
                        }
                    </Cards>
                )
                : (
                    <CardsPlaceholder>
                        NO USERS TO SHOW
                    </CardsPlaceholder>
                )
    );
}