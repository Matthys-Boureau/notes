import styled from "styled-components";
import { css } from "styled-components";

const CENTERED = css`
display: flex;
justify-content: center;
align-items: center;
`;
const SIDE_WIDTH = 240;

export const Side = styled.aside`
  position: fixed;
  width: ${SIDE_WIDTH}px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${({theme}) => theme.asideBackgroundColor};
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Main = styled.main`
  height: 100vh;
  margin-inline-start:${SIDE_WIDTH}px;
`;

export const MessageNoNoteSelected = styled.div`
height: 100%;
${CENTERED};
font-size: 40px;
`;

export const LoaderWrapper = styled.div`
height: 60px;
${CENTERED}
`;

export const FullHeightAndWidthCentered = styled.div`
height: 100%;
display: flex;
flex-direction: column;
gap: 20px;
${CENTERED};
`;


export const TextSuppression = styled.p`
font-size: 30px;
`;

export const ButtonRetour = styled.button`
border: none;
background: none;
font-size: 20px;
width: 100px;
height: 50px;
color: ${({theme})=> theme.textColor};

&:hover{
  background-color: ${({theme}) => theme.HoverButton};
  border-radius: 15px;
}
`;