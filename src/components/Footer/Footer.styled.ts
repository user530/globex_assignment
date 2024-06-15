import styled from 'styled-components';

export const StyledFooter = styled.footer`
    padding-block: 15px;
    background-color: ${({ theme }) => theme.colors.icons};
    color: ${({ theme }) => theme.colors.white};
    flex-shrink: 0;
    text-align: center;
`;