import styled from 'styled-components';

export const StyledSearchForm = styled.form`
    display: block;
    position: relative;
    margin-bottom: 32px;

    @media (max-width: 767px) {
    margin-bottom: 24px; 
    }
`;

export const StyledSearchInput = styled.input.attrs({ type: 'search' })`
    display: block;
    width: 100%;
    height: 48px;
    padding-inline: 24px 60px;
    border-radius: 24px;
    border: ${({ theme }) => `1px solid ${theme.colors.accent}`};
    font-family: inherit;
    font-size: inherit;
    color: ${({ theme }) => theme.colors.textMain};

    &::-webkit-search-cancel-button {
        position: relative;
        right: -6px;
        font-size: 18px;
        cursor: pointer;
    }

    &:focus {
        outline: none;
        box-shadow: ${({ theme }) => `0 0 12px ${theme.colors.shadowDark}`};
    }
`;

export const StyledSearchSpan = styled.span`
    position: absolute;
    right: 26px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.icons};
`;