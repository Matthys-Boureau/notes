import { Side, Main, MessageNoNoteSelected, LoaderWrapper } from "./App.Style";
import { LightTheme, DarkTheme, GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { NoteList } from "./NoteList/NoteList.styled";
import {Routes} from "react-router-dom";
import {AiOutlinePlusSquare} from "react-icons/ai";
import {AddNote} from "./iconAndLabel/inconAndLabel.styled";


import Note from "./Note";
import LinkToNote from "./LinkToNote";
import { Route } from "react-router-dom";
import { Loader } from "./Note/Note.styled";

function App() {
  const [notes, setNotes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fecthNote = async () => {
    const response = await fetch("/notes?_sort=id&_order=desc");
    const notes = await response.json();
    setIsLoading(false);
    setNotes(notes);
  };

  useEffect(() => {
    fecthNote();
  }, []);
  
  const newNote = async () => {
    const response = await fetch(`/notes/`, {
      method: "POST",
      body: JSON.stringify({title : "Nouvelle note"}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const note = await response.json();
    setNotes([note, ...notes])
  };

  const deleteNote = (id) => {
    console.log(notes.filter(_note => (_note.id !== id)));
    console.log(id)
    setNotes(notes.filter(_note => _note.id !== id));
  }

  const updateNote = (noteToUpdate) => {
    setNotes(notes.map(_note => (_note.id === noteToUpdate.id ? noteToUpdate : _note)));
  }

  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyle />
        <Side>
          {isLoading && 
          <LoaderWrapper>
          <Loader />
          </LoaderWrapper>
          }
          <AddNote onClick={(event) => {
            newNote();
          }}>
            <AiOutlinePlusSquare />
          </AddNote>
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
             { !isLoading && " Sélectionner une note pour l'éditer"}
            </MessageNoNoteSelected>}/>
            <Route path="/notes/:id" element={<Note onSave={updateNote} onDelete={deleteNote}/>}/>
          </Routes>
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
