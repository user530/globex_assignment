import styled, { keyframes } from 'styled-components';
import { H3 } from '../../styles/shared';

export const StyledPopup = styled.div`
    position: fixed;
    inset: 0;
    z-index: 2;
    background-color: rgba(188, 195, 208, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const scale = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

export const StyledPopupCard = styled.div`
    width: min(500px, 100%);
    padding: 24px;
    padding-bottom: 56px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    transform: scale(0);
    animation-name: ${scale};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    & > * + * {
        margin-top: 40px;
    }

    @media (max-width: 767px) {
        padding: 16px;
        & > * + * {
            margin-top: 20px;
        }
    }
`;

export const StyledPopupCardHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledPopupCardHeading = styled(H3)``;

export const StyledPopupCardClose = styled.button`
    color: ${({ theme }) => theme.colors.black};
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.icons};
    }
`;

export const StyledPopupCardList = styled.ul`
    font-size: 16px;
    line-height: 1.12;
    color: ${({ theme }) => theme.colors.textLight};

    li + li {
        margin-top: 19px;
    }

    @media (max-width: 767px) {
       font-size: 14px;

       li + li {
           margin-top: 14px; 
        }
    }
`;

export const StyledPopupCardLI = styled.li`
    display: flex;
    column-gap: 40px;

    @media (max-width: 767px) {
       flex-direction: column;
       row-gap: 10px;
    }
`;

export const StyledLiKey = styled.span`
    font-size: 18px;
    min-width: 137px;
    color: ${({ theme }) => theme.colors.textMain};

    @media (max-width: 767px) {
       font-size: 16px;
    }
`;

export const StyledLiValueLink = styled.a`
    &:hover {
        color: ${({ theme }) => theme.colors.icons}
    }
`;

export const StyledLiValueText = styled.span``;

export const StyledPopupCardText = styled.div`
    & > * + * {
        margin-top: 12px;
    }
`;

export const StyledPopupTextHeading = styled.h4`
    font-size: 18px;
    line-height: 1.33;

    @media (max-width: 767px) {
       font-size: 16px;
    }
`;

export const StyledPopupTextParagraph = styled.p`
    font-size: 16px;
    line-height: 1.12;
    color: ${({ theme }) => theme.colors.textLight};

    @media (max-width: 767px) {
       font-size: 14px;
    }
`;