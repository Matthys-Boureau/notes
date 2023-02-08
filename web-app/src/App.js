import { Side, Main } from "./App.Style";
import { LightTheme, DarkTheme, GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { NoteList } from "./NoteList/NoteList.styled";

import Note from "./Note";
import LinkToNote from "./LinkToNote";

function App() {
  const [notes, setNotes] = useState(null);

  const fecthNote = async () => {
    const response = await fetch("/notes");
    const notes = await response.json();
    setNotes(notes);
  };

  useEffect(() => {
    fecthNote();
  }, []);

  return (
    <>
      <ThemeProvider theme={DarkTheme}>
        <GlobalStyle />
        <Side>
          {notes && (
            <NoteList>
              {notes.map((note) => (
                <li key={note.id}>
                  <LinkToNote title={note.title} />
                </li>
              ))}
            </NoteList>
          )}
        </Side>
        <Main>
          <Note />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
