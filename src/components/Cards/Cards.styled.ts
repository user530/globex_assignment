import styled from 'styled-components';
import { keyframes } from 'styled-components';

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
    border-radius: 16px;
    border: ${({ theme }) => `2px dashed ${theme.colors.accent}`};
    color: ${({ theme }) => theme.colors.textLight};
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

interface SpinnerProps {
    size?: number;
    color?: string;
}

export const Spinner = styled.div<SpinnerProps>`
    width: ${({ size }) => `${size || 60}px`};
    height: ${({ size }) => `${size || 60}px`};
    border: ${({ size }) => `${(size || 60) / 10}px solid`};
    border-color: ${({ theme }) => theme.colors.accent};
    border-top-color: ${({ color, theme }) => color ?? theme.colors.icons};
    border-radius: 50%;
    background: transparent;
    animation: ${spin} 1.5s linear infinite;
`;