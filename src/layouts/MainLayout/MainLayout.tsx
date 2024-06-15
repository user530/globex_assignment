import React, { PropsWithChildren } from 'react';
import { MainContent, MainFooter, MainHeader, MainLayoutContainer } from './MainLayout.styled';

interface IMainLayout extends PropsWithChildren { }

export const MainLayout: React.FC<IMainLayout> = ({ children }) => {
    return (
        <MainLayoutContainer>
            <MainHeader />

            <MainContent>
                {children}
            </MainContent>

            <MainFooter />
        </MainLayoutContainer>
    );
}