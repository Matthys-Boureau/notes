
import logo from './logo.svg';
import { Side, Main } from "./App.Style";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Side> Barre latéral</Side>
      <Main> Contenue Principale</Main>
    </>
  );
}

export default App;
