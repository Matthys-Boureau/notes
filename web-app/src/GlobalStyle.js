import styled, { createGlobalStyle } from "styled-components";
import { MdDarkMode } from "react-icons/md";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  outline: none;
  border: none;
}

*:focus{
  outline: none;
}

body {
  margin: 0;
  color: ${({theme}) => theme.textColor};
  background-color: ${({theme}) => theme.mainBackgroundColor};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;


export const DarkTheme = {
  mainBackgroundColor : "#2c3338",
  asideBackgroundColor : "#1d2327",
  textColor : "white",
  borderBottom : "white",
  SaveButtonBackgroundColor: "rgb(0,150,0, 0.8)",
  SaveButtonBorderColor: "rgb(0,150,0, 0.8)",
  ErrorColor : "red",
  DeleteButtonBackgroundColor: "rgb(220,0,0, 0.8)",
  DeleteButtonBorderColor: "rgb(220,0,0, 0.8)",
  BoxShadow : "rgba(255, 255, 255, 0.05) 0px 5px 1px 0px"
}

export const LightTheme = {
  mainBackgroundColor : "#e2dcd8",
  asideBackgroundColor : "#d3ccc7",
  textColor : "black",
  borderBottom : "black",
  SaveButtonBackgroundColor: "rgb(0,175,0, 0.8)",
  SaveButtonBorderColor: "rgb(0,175,0, 0.8)",
  ErrorColor : "red",
  DeleteButtonBackgroundColor: "rgb(255,0,0, 0.8)",
  DeleteButtonBorderColor: "rgb(255,0,0, 0.8)",
  BoxShadow : "rgba(0, 0, 0, 0.05) 0px 5px 1px 0px"
}
