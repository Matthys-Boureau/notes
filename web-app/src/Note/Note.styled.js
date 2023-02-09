import styled from "styled-components";

const INPUT_PADDING = 10;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: stretch;
height: 100%;
`;

export const Title = styled.input`
background: transparent;
height: 80px;
padding: ${INPUT_PADDING}px;
font-size: 40px;
border: none;
color: inherit;
font-family: inherit;
border-bottom: 5px solid ${({theme}) => theme.asideBackgroundColor};
`;

export const Content = styled.textarea`
flex: 1;
background: transparent;
color: inherit;
padding: ${INPUT_PADDING}px;
font-family: inherit;
border: none;
font-size: 18px;
resize: none;
`;

export const ButtonSave = styled.button`
width: 100px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
background-color: ${({theme})=> theme.SaveButtonBackgroundColor};
color: ${({theme}) => theme.textColor};
padding: ${INPUT_PADDING}px;
margin: 20px;
border: ${({theme}) => theme.SaveButtonBorderColor};
border-radius: 15px;
font-size: 20px;
`;

export const SaveAndStatus = styled.div`
height: 70px;
width: 100%;
display: flex;
align-items: center;
border-top: 3px solid ${({theme}) => theme.asideBackgroundColor};
gap: 8px;
`;