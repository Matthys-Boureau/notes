import styled from "styled-components";

const INPUT_PADDING = 8;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: stretch;
height: 100%;
`;

export const Title = styled.input`
background: transparent;
height: 40px;
padding: ${INPUT_PADDING}px;
font-size: 20px;
border: none;
color: inherit;
font-family: inherit;
`;

export const Content = styled.textarea`
flex: 1;
background: transparent;
color: inherit;
padding: ${INPUT_PADDING}px;
font-family: inherit;
`;