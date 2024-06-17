import React from 'react';
import { StyledSearchForm, StyledSearchInput, StyledSearchBtn } from './Searchbar.styled';
import { CustomIcon } from '../index';
import { useSearch } from './useSearch';

interface ISearchbar {
    onSearch: (queryString: string) => void;
}

export const Searchbar: React.FC<ISearchbar> = ({ onSearch }) => {
    const { inputHandler, keypressHandler, submitHandler } = useSearch({ onSearch });
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