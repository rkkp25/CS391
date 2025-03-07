import { styled } from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

export default function HomePreview () {
    return (
      <>
          <StyledDiv>
              <p>My name is Kristine Peters. I'm a senior studying computer science at Boston University.
                  I live in the Greater Boston Area with my parents and my dog, Yuki. I'm currently looking
                  for post-graduate employment in the Boston area or remote, and I'm most interested in
                  Full Stack Development and Cybersecurity.</p>
              <p>In my free time, I enjoy drawing, playing video games, learning guitar, and working out at the gym.</p>

          </StyledDiv>
      </>
    );
}