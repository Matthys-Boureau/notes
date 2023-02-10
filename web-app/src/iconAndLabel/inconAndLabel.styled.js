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
font-size: 30px;
padding: 7px 0px;
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
font-size: 29px;
padding: 23px 0px;
background-color: none;
background: none;
border: none;
width: 50%;
`;

const SIDE_WIDTH = 240;

export const MENU = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
position: fixed;
background-color: ${({theme}) => theme.asideBackgroundColor};
width: ${SIDE_WIDTH}px;
box-shadow: ${({theme}) => theme.BoxShadow};
height: fit-content;
`;

export const MENU_ICONS = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: ${({theme}) => theme.asideBackgroundColor};
width: ${SIDE_WIDTH}px;
height: auto;
`;


export const DIV_SEARCHBAR = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
width: ${SIDE_WIDTH}px;
padding: 10px;
border-top: ${({theme}) => theme.borderTop};
`;


export const SEARCHBAR = styled.input`
display: flex;
height: 40px;
width: 200px;
box-shadow: none;
border-radius: 100vmax;
padding-left: 10px;
background-color: ${({theme}) => theme.asideBackgroundColor};
border: 2px solid ${({theme}) => theme.textColor};
`;

export const SCROLL = styled.div`
overflow: auto;
margin-top: 80px;
`;