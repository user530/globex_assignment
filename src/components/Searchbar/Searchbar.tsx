import React from 'react';
import { StyledSearchForm, StyledSearchInput, StyledSearchBtn } from './Searchbar.styled';

export const Searchbar: React.FC = () => {
    return (
        <StyledSearchForm>
            <StyledSearchInput />
            <StyledSearchBtn>
                x
            </StyledSearchBtn>
        </StyledSearchForm>
    );
}