
import logo from './logo.svg';
import { Side, Main } from "./App.Style";
import { LightTheme,DarkTheme, GlobalStyle } from "./GlobalStyle";
import Note from "./Note";
import { ThemeProvider } from 'styled-components';


function App() {
  return (
    <>
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyle />
      <Side> Barre latéral</Side>
      <Main> 
        <Note />
      </Main>
    </ThemeProvider>
    </>
  );
}

export default App;
