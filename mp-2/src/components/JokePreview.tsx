import { Joke } from '../interfaces/Types.ts';
import { styled } from "styled-components";

const JokePreviewDiv = styled.div`
    margin: 3rem auto;
    padding: 1rem;
    width: 20rem;
    background-color: palevioletred;
    border: #9a0a39 double 0.5vw;
    justify-content: center;
`;

export function JokePreview ({joke}: {joke: Joke}) {
    return (
        <JokePreviewDiv>
            <h2>Joke #{joke.id}</h2>
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
        </JokePreviewDiv>
    )
}
