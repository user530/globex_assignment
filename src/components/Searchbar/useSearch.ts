import debounce from 'lodash.debounce';
import React, { ChangeEvent, FormEvent, KeyboardEvent } from 'react';

interface IUseSearchProps {
    onSearch: (queryString: string) => void;
}

type IUseSearch = (props: IUseSearchProps) => {
    submitHandler: (e: FormEvent<HTMLFormElement>) => void;
    inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    keypressHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const useSearch: IUseSearch = ({ onSearch }) => {
    const [queryString, setQueryString] = React.useState<string>('');

    const submitHandler = React.useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            onSearch(queryString);
        },
        [onSearch, queryString]
    );

    const debouncedSetter = React.useCallback(
        debounce(
            (newQueryString: string) => setQueryString(newQueryString),
            100
        ),
        [setQueryString]
    );

    const inputHandler = React.useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            debouncedSetter(e.target.value);
        },
        [debouncedSetter]
    );

    const keypressHandler = React.useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            switch (e.key) {
                case ('Enter'):
                    e.preventDefault();
                    onSearch(queryString);
                    break;
            }
        },
        [onSearch, queryString]
    );

    return {
        submitHandler,
        inputHandler,
        keypressHandler,
    };
}