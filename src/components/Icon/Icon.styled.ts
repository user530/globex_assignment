import styled from 'styled-components';

export const StyledIcon = styled.svg`
    width: ${({ width }) => `${width || 24}px`};
    height: ${({ height }) => `${height || 24}px`};
    color: ${({ fill }) => fill || 'currentColor'};
`;