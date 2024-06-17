import React from 'react';
import { StyledSearchForm, StyledSearchInput, StyledSearchSpan } from './Searchbar.styled';
import { CustomIcon } from '../index';
import { useSearch } from './useSearch';

interface ISearchbar {
    onSearch: (queryString: string) => void;
}

export const Searchbar: React.FC<ISearchbar> = ({ onSearch }) => {
    const { onQueryChange, } = useSearch({ onSearch });
    return (
        <StyledSearchForm>
            <StyledSearchInput onChange={onQueryChange} />

            <StyledSearchSpan>
                <CustomIcon name='search' width={20} height={20} />
            </StyledSearchSpan>
        </StyledSearchForm>
    );
}