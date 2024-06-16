import React from 'react';
import { StyledFooter } from './Footer.styled';

interface IFooter {
    footerText?: string;
}

export const Footer: React.FC<IFooter> = ({ footerText }) => {
    return (
        <StyledFooter>
            <p>{footerText ?? <>&copy; Copyright 2024</>}</p>
        </StyledFooter>
    )
}