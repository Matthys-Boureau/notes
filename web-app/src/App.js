import { Side, Main, MessageNoNoteSelected } from "./App.Style";
import { LightTheme, DarkTheme, GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { NoteList } from "./NoteList/NoteList.styled";
import {Routes} from "react-router-dom";

import Note from "./Note";
import LinkToNote from "./LinkToNote";
import { Route } from "react-router-dom";

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
                  <LinkToNote id={note.id} title={note.title} />
                </li>
              ))}
            </NoteList>
          )}
        </Side>
        <Main>
          <Routes>
            <Route path="/" element={
            <MessageNoNoteSelected>
              Sélectionner une note pour l'éditer
            </MessageNoNoteSelected>}/>
            <Route path="/notes/:id" element={<Note />}/>
          </Routes>
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
