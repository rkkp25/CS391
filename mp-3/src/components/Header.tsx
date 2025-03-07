import {Link} from "react-router";
import {styled} from "styled-components";

const StyledHeader = styled.header`
    padding: 2vw 1vw;
    background-color: #63d6a4;
    border-bottom: double 5px white;
`;
const Title = styled.h1`
    padding: 0.5vw;
    margin: 1vw;
`;

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
                        <StyledLink to={`/education`}>Education</StyledLink>
                    </nav>
                </Title>
            </StyledHeader>
        </>
    );
}