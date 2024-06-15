import React from 'react';
import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Container } from '../../styles/shared';
import { Searchbar, UserCards } from '../../components';
import { HomeSection } from './Home.styled';

export const HomePage: React.FC = () => {
    return (
        <MainLayout>
            <HomeSection>
                <Container>
                    <Searchbar />
                    <UserCards />
                </Container>
            </HomeSection>
        </MainLayout>
    );
}