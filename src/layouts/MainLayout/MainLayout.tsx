import React, { PropsWithChildren } from 'react';
import { MainContent, MainFooter, MainHeader, MainLayoutContainer } from './MainLayout.styled';

interface IMainLayout extends PropsWithChildren {
    headingText?: string;
    footerText?: string;
}

export const MainLayout: React.FC<IMainLayout> = ({ children, headingText, footerText }) => {
    return (
        <MainLayoutContainer>
            <MainHeader headingText={headingText} />

            <MainContent>
                {children}
            </MainContent>

            <MainFooter footerText={footerText} />
        </MainLayoutContainer>
    );
}