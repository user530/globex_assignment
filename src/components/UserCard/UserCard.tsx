import React from 'react';
import { StyledCard, StyledCardHeading, StyledCardIconWrapper, StyledCardLI, StyledCardList, StyledCardTextWrapper } from './UserCard.styled';
import { CustomIcon } from '../Icon/Icon';

export const UserCard: React.FC = () => {
    return (
        <StyledCard>
            <StyledCardHeading>
                Name
            </StyledCardHeading>

            <StyledCardList>
                <StyledCardLI>
                    <StyledCardIconWrapper>
                        <CustomIcon name='phone' width={14} height={24} />
                    </StyledCardIconWrapper>

                    <StyledCardTextWrapper>
                        8(927)123-456-00-00
                    </StyledCardTextWrapper>
                </StyledCardLI>

                <StyledCardLI>
                    <StyledCardIconWrapper>
                        <CustomIcon name='mail' width={24} height={14} />
                    </StyledCardIconWrapper>

                    <StyledCardTextWrapper>
                        example@email.com
                    </StyledCardTextWrapper>
                </StyledCardLI>
            </StyledCardList>
        </StyledCard>
    );
}