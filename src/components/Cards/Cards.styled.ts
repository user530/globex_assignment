import styled from 'styled-components';

export const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 25px;
    row-gap: 24px;

    @media (max-width: 991px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 599px) {
        grid-template-columns: 1fr;
        row-gap: 12px;
    }
`;

export const CardsPlaceholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 100px;
    border: ${({ theme }) => `2px dashed ${theme.colors.textLight}`};
`;