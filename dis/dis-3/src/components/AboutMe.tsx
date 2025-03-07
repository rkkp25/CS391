import { styled } from "styled-components";

const StyledDiv= styled.div`
    width: 80vw;
    margin: 0 auto;
    background-color: #7cebbb;
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

export default function AboutMe() {
    return (
        <StyledDiv>
            <h1>I am a CS-391 Professor!</h1>
            <p>I really like this class!</p>
        </StyledDiv>

    );
}
