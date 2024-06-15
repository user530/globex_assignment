import styled from 'styled-components';
import { H1 } from '../../styles/shared';

export const StyledHeader = styled.header`
    padding-block: 20px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.icons};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 24px;
    text-align: center;
    text-transform: uppercase;
    line-height: 1.7;
    flex-shrink: 0;
`;

export const StyledHeading = styled(H1)``;