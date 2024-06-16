import React from 'react';
import { Cards, CardsPlaceholder } from './Cards.styled';
import { UserCard } from './UserCard/UserCard';
import { User } from '../../types';

interface IUserCards {
    users: User[];
    cardClickHandler: (user: User) => void;
}

export const UserCards: React.FC<IUserCards> = ({ users, cardClickHandler }) => {
    return (
        users.length > 0
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