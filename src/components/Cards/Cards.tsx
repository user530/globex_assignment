import React from 'react';
import { Cards } from './Cards.styled';
import { UserCard } from './SingleCard.styled';

export const UserCards: React.FC = () => {
    const cards = [1, 2, 3, 4, 5, 6];

    return (
        <Cards>
            {
                cards.map(
                    (cardVal) => <UserCard key={cardVal} />
                )
            }
        </Cards>
    );
}