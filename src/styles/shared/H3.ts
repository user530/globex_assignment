import styled from 'styled-components';

export const H3 = styled.h3`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: 24px;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.textMain};
`;