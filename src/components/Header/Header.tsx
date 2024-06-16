import React from 'react';
import { Container } from '../../styles/shared';
import { StyledHeader, StyledHeading } from './Header.styled';

interface IHeader {
    headingText?: string;
}

export const Header: React.FC<IHeader> = ({ headingText }) => {
    return (
        <StyledHeader>
            <Container>
                <StyledHeading>{headingText ?? 'Heading'}</StyledHeading>
            </Container>
        </StyledHeader>
    );
}
