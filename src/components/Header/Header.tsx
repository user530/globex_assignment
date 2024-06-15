import { Container } from '../../styles/shared';
import { StyledHeader, StyledHeading } from './Header.styled';

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <StyledHeading>Heading</StyledHeading>
            </Container>
        </StyledHeader>
    );
}
