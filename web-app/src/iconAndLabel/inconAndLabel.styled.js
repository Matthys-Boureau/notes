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
font-size: 25px;
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
font-size: 25px;
padding: 20px 0px;
background-color: none;
background: none;
border: none;
width: 50%;
`;

export const MENU = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
position: fixed;
background-color: ${({theme}) => theme.asideBackgroundColor};
width: 240px;
box-shadow: ${({theme}) => theme.BoxShadow};
height: 75px;
`;

export const SCROLL = styled.div`
overflow: auto;
margin-top: 80px;
`;