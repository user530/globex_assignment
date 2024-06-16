import React, { ReactElement } from 'react';
import { StyledCard, StyledCardHeading, StyledCardIconWrapper, StyledCardLI, StyledCardList, StyledCardTextWrapper } from './UserCard.styled';
import { CustomIcon } from '../../Icon/Icon';
import { User } from '../../../types';

interface IUserCard {
    user: User;
    clickHandler: (user: User) => void;
}

export const UserCard: React.FC<IUserCard> = ({ user, clickHandler }) => {
    const { name, phone, email } = user;
    const openCard = React.useCallback(() => clickHandler(user), [clickHandler, user]);

    return (
        <StyledCard onClick={openCard}>
            <CardHeading heading={name} />
            <StyledCardList>
                <CardInfoItem
                    icon={<CustomIcon name='phone' width={14} height={24} />}
                    info={phone}
                />

                <CardInfoItem
                    icon={<CustomIcon name='mail' width={24} height={14} />}
                    info={email}
                />
            </StyledCardList>
        </StyledCard>
    );
}

interface ICardHeading {
    heading: string;
}

const CardHeading: React.FC<ICardHeading> = ({ heading }) => {
    return (
        <StyledCardHeading>
            {heading ?? 'Card Name'}
        </StyledCardHeading>
    );
}

interface ICardInfoItem {
    info: string;
    icon: ReactElement;
}

const CardInfoItem: React.FC<ICardInfoItem> = ({ icon, info }) => {
    return (
        <StyledCardLI>
            <StyledCardIconWrapper>
                {icon}
            </StyledCardIconWrapper>

            <StyledCardTextWrapper>
                {info ?? 'Card info'}
            </StyledCardTextWrapper>
        </StyledCardLI>
    );
}