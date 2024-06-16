import React, { ChangeEvent, FormEvent, KeyboardEvent } from 'react';
import { StyledSearchForm, StyledSearchInput, StyledSearchBtn } from './Searchbar.styled';
import { CustomIcon } from '../index';
import debounce from 'lodash.debounce';

interface ISearchbar {
    onSearch: (queryString: string) => void;
}

export const Searchbar: React.FC<ISearchbar> = ({ onSearch }) => {
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
            300
        ),
        []
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

    return (
        <StyledSearchForm onSubmit={submitHandler}>
            <StyledSearchInput
                onChange={inputHandler}
                onKeyDown={keypressHandler}
            />
            <StyledSearchBtn>
                <CustomIcon name='search' width={20} height={20} />
            </StyledSearchBtn>
        </StyledSearchForm>
    );
}