import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
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
}

export const LightTheme = {
  mainBackgroundColor : "#d3ccc7",
  asideBackgroundColor : "#e2dcd8",
  textColor : "black",
}