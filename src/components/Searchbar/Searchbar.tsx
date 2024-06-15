import React from 'react';
import { StyledSearchForm, StyledSearchInput, StyledSearchBtn } from './Searchbar.styled';
import { CustomIcon } from '../index';

export const Searchbar: React.FC = () => {
    return (
        <StyledSearchForm>
            <StyledSearchInput />
            <StyledSearchBtn>
                <CustomIcon name='search' width={20} height={20} />
            </StyledSearchBtn>
        </StyledSearchForm>
    );
}