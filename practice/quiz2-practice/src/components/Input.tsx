import { useState, useEffect } from "react";
import { styled } from "styled-components";

const StyledDiv = styled.div`
   width: 20%; 
   justify-content: center;
`

const StyledInput = styled.input`
    display: block;
    border: coral solid 2px;
`

const StyledButton = styled.button`
    display: block;
`


export function Input() {
    const [bool, setBool] = useState(false);

    function clickHandle() {
        setBool(!bool);
        console.log(bool);
    }

    return (
        <StyledDiv>
            <StyledInput></StyledInput>
            <StyledInput></StyledInput>
            <StyledButton onClick={clickHandle}>Change State!</StyledButton>
        </StyledDiv>
    )
}
