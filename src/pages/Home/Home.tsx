import React from 'react';
import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { Popup, Searchbar, UserCards } from '../../components';
import { FlexColumnContainer, HomeSection } from './Home.styled';
import { User } from '../../types';
import { clearCache, fetchData, getQueryString } from '../../utils/api';
import { ZodValidationUsers } from '../../utils/validation';

export const HomePage: React.FC = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [users, setUsers] = React.useState<User[]>([]);
    const abortController = React.useRef<AbortController | null>(null);
    const [popup, setPopup] = React.useState<User | null>(null);

    const openCard = React.useCallback((user: User) => setPopup(user), []);
    const closePopup = React.useCallback(() => setPopup(null), []);

    const onSearch = (query: string) => fetchAndSet(query);

    const fetchAndSet = async (term: string = '', endpoint: string = '/') => {
        console.log('Fetch and Set', term);
        const queryObj = { term };

        try {
            setIsLoading(true);
            // Abort request if any in action
            if (abortController.current)
                abortController.current.abort();

            // Setup new abort controller
            abortController.current = new AbortController();

            // Fetch data
            const data = await fetchData(endpoint, queryObj, abortController.current.signal);

            const validated = new ZodValidationUsers().validate(data);

            if (!validated)
                throw new Error('Incorrect data structure');

            setUsers(validated);
        } catch (error) {
            console.log('Failed to fetch and set:', error);
            clearCache(endpoint, getQueryString(queryObj));
        } finally {
            setIsLoading(false);
        }
    };

    React.useEffect(
        () => {
            fetchAndSet();
        },
        []
    );

    return (
        <MainLayout>
            <HomeSection>
                <FlexColumnContainer>
                    <Searchbar onSearch={onSearch} />
                    <UserCards users={users} cardClickHandler={openCard} isLoading={isLoading} />
                </FlexColumnContainer>
                <Popup user={popup} closePopupHandler={closePopup} />
            </HomeSection>
        </MainLayout>
    );
}