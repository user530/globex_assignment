import React from 'react';
import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Popup, Searchbar, UserCards } from '../../components';
import { FlexColumnContainer, HomeSection } from './Home.styled';
import { User, ValidationService } from '../../types';
import { ZodValidationUsers } from '../../utils/validation';
import { useUserFetch } from './useUserFetch';
import { useUserPopup } from './useUserPopup';

export const HomePage: React.FC = () => {
    const USERS_ENDPOINT = import.meta.env.VITE_USERS_ENDPOINT || '/';
    const userValidationService = React.useRef<ValidationService<User[]>>(new ZodValidationUsers);

    // Handle user fetching and setting logic
    const { isLoading, onSearch, users } = useUserFetch(
        {
            endpoint: USERS_ENDPOINT,
            userValidationService: userValidationService.current,
        }
    );

    // Handle user popup logic
    const { popup, openPopup, closePopup } = useUserPopup();

    return (
        <MainLayout>
            <HomeSection>
                <FlexColumnContainer>
                    <Searchbar onSearch={onSearch} />
                    <UserCards users={users} cardClickHandler={openPopup} isLoading={isLoading} />
                </FlexColumnContainer>
                <Popup user={popup} closePopupHandler={closePopup} />
            </HomeSection>
        </MainLayout>
    );
}