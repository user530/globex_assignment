import styled from 'styled-components';

export const StyledIcon = styled.svg`
    width: ${({ width, theme }) => width || theme.spacing.medium};
    height: ${({ height, theme }) => height || theme.spacing.medium};
    color: ${({ fill }) => fill || 'currentColor'};
`;