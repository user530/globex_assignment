import React from 'react';
import { User, ValidationService } from '../../types';
import { clearCache, fetchData, getQueryString } from '../../utils/api';

interface IUseUserFetchProps {
    endpoint: string;
    userValidationService: ValidationService<User[]>;
}

type IUseUserFetch = (props: IUseUserFetchProps) => {
    isLoading: boolean;
    users: User[];
    onSearch: (query: string) => void;
}

export const useUserFetch: IUseUserFetch = ({ endpoint, userValidationService }) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [users, setUsers] = React.useState<User[]>([]);
    const abortController = React.useRef<AbortController | null>(null);

    const fetchAndSet = React.useCallback(
        async (endpoint: string, searchTerm: string = '') => {
            const queryObj = { term: searchTerm };

            try {
                setIsLoading(true);
                // Abort request if any in action
                if (abortController.current)
                    abortController.current.abort();

                // Setup new abort controller
                abortController.current = new AbortController();

                // Fetch data
                const data = await fetchData(endpoint, queryObj, abortController.current.signal);

                // Validate data
                const validated = userValidationService.validate(data);

                // Handle invalid data
                if (!validated)
                    throw new Error('Incorrect data structure');

                // Set data
                setUsers(validated);
            } catch (error) {
                console.log('Failed to fetch and set:', error);
                clearCache(endpoint, getQueryString(queryObj));
            } finally {
                setIsLoading(false);
            }
        },
        [userValidationService]
    );

    const onSearch = React.useCallback(
        (query: string) => fetchAndSet(endpoint, query),
        [fetchAndSet, endpoint]
    );

    // Initial data fetch
    React.useEffect(
        () => {
            fetchAndSet(endpoint);
        },
        []
    );

    return {
        isLoading,
        users,
        onSearch,
    };
}