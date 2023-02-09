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
  SaveButtonBackgroundColor: "rgb(0,150,0, 0.5)",
  SaveButtonBorderColor: "rgb(0,150,0, 0.5)",
  ErrorColor : "red",
  DeleteButtonBackgroundColor: "rgb(150,0,0, 0.5)",
  DeleteButtonBorderColor: "rgb(150,0,0, 0.5)",
}

export const LightTheme = {
  mainBackgroundColor : "#e2dcd8",
  asideBackgroundColor : "#d3ccc7",
  textColor : "black",
  borderBottom : "black",
  SaveButtonBackgroundColor: "rgb(0,175,0, 0.5)",
  SaveButtonBorderColor: "rgb(0,175,0, 0.5)",
  ErrorColor : "red",
  DeleteButtonBackgroundColor: "rgb(175,0,0, 0.5)",
  DeleteButtonBorderColor: "rgb(175,0,0, 0.5)",

}
