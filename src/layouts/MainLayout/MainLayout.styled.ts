import styled from 'styled-components';
import { Footer, Header } from '../../components';
import { PageLayout } from '../../styles/shared';

export const MainLayoutContainer = styled(PageLayout)`
    display: flex;
    flex-direction: column;
`;

export const MainHeader = styled(Header)`
    flex-shrink: 0;
`;

export const MainFooter = styled(Footer)`
    flex-shrink: 0;
`;

export const MainContent = styled.main`
    flex-grow: 1;
    display: flex;

    & > * {
        width: 100%;
    }
`;