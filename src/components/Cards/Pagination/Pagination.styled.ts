import styled from 'styled-components';

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    padding-top: 48px;
    column-gap: 12px;
`;

export const PaginationButton = styled.button`
    &:disabled {
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        color: ${({ theme }) => theme.colors.icons};
    }
`;

export const PaginationIndicator = styled.span`
    min-width: 106px;
    text-align: center;
    font-variant-numeric: tabular-nums;
    font-size: 24px;

    @media (max-width: 599px) {
    font-size: 18px;
    min-width: 80px;
}
`;