import styled from 'styled-components';
import { H3 } from '../../styles/shared';

export const StyledCard = styled.div`
    min-height: 314px;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.textMain};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        min-width: 24px;
        box-shadow: ${({ theme }) => `0 0 20px 0 ${theme.colors.shadowDark}`};
        
        h3 {
            color: ${({ theme }) => theme.colors.icons};
        }
    }

    @media (max-width: 767px) {
        min-height: 200px;
        padding: 16px;
    }
`;

export const StyledCardHeading = styled(H3)`
    transition: 0.3s;
`;

export const StyledCardList = styled.ul`
    margin-top: 24px;
`;

export const StyledCardLI = styled.li`
    display: flex;
    column-gap: 14px;
    align-items: center;

    & + li {
        margin-top: 14px;
    }
`;

export const StyledCardIconWrapper = styled.span`
    min-width: 24px;
    flex-shrink: 0;
    text-align: center;
    color: ${({ theme }) => theme.colors.icons};
`;

export const StyledCardTextWrapper = styled.span`
    font-size: 14px;
    line-height: 1.43;
    color: ${({ theme }) => theme.colors.textLight}; 
`;