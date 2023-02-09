import styled from "styled-components";

export const IconAndLabel = styled.div`
display: inline-flex;
align-items: center;
gap: 4px;
color: ${({theme})=> theme.SaveButtonBackgroundColor};
font-size: 30px;
`;

export const AddNote = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 4px;
color: ${({theme})=> theme.textColor};
font-size: 40px;
padding: 20px 0px;
background-color: none;
background: none;
border: none;
width: 50%;
`;

export const DarkLightMode =styled.button`
  display: flex;
align-items: center;
justify-content: center;
gap: 4px;
color: ${({theme})=> theme.textColor};
font-size: 40px;
padding: 20px 0px;
background-color: none;
background: none;
border: none;
width: 50%;
`;

export const FLEX = styled.div`
display: flex;
flex-direction: row;

`;
