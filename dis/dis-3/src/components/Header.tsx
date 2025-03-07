import { Link } from "react-router";
import { styled } from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Title = styled.h2`
    padding: 0.5rem;
    margin: 1rem;
`;

// HTML Tag is styled.tag, COMPONENT is styled(component)
const StyledLink = styled(Link)`
    padding: 2rem;
    margin: 1rem;
`;

export default function Header() {
    return (
        <>
            <StyledHeader>
                <Title>
                    <nav>
                        <StyledLink to={`/`}>Home</StyledLink>
                        <Link to={`about`}>About Me</Link>
                    </nav>
                </Title>
            </StyledHeader>
        </>
    );
}
