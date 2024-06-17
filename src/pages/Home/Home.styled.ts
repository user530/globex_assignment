import styled from 'styled-components';
import { Container } from '../../styles/shared';

export const HomeSection = styled.section`
    padding-block: 64px;
    display: flex;

    @media (max-width: 767px) {
        padding-block: 32px;
    }
`;

export const FlexColumnContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    & > * {
        width: 100%;
    }
`;