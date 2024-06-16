import styled from 'styled-components';

export const StyledIcon = styled.svg`
    width: ${({ width, theme }) => `${width}px` || theme.spacing.medium};
    height: ${({ height, theme }) => `${height}px` || theme.spacing.medium};
    color: ${({ fill }) => fill || 'currentColor'};
`;