import { Side, Main, MessageNoNoteSelected, LoaderWrapper } from "./App.Style";
import { LightTheme, DarkTheme, GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { NoteList } from "./NoteList/NoteList.styled";
import {Routes} from "react-router-dom";
import {AddNote, DarkLightMode, MENU, SCROLL, MENU_ICONS, SEARCHBAR, DIV_SEARCHBAR} from "./iconAndLabel/inconAndLabel.styled";
import { MdAddCircle} from "react-icons/md";
import {WiMoonAltWaningCrescent6,WiMoonAltWaxingCrescent2} from 'react-icons/wi';
import {FiSearch} from "react-icons/fi"


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
      body: JSON.stringify({title : 'Nouvelle Note'}),
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

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const [searchTerm, setSearchTerm] = useState("");

  const doesNotMatchSearchTerm = (note) => {
    if(note.title) {
      if(note.title.includes(searchTerm)) {
        return true;
      } else if(note.content) {
        if(note.content.includes(searchTerm)) {
          return true;
        }
      }
    } else if(note.content) {
      if(note.content.includes(searchTerm)) {
        return true;
      }
    }

    return false;
  }

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <GlobalStyle />
        <Side>
          {isLoading && 
          <LoaderWrapper>
          <Loader />
          </LoaderWrapper>
          }
          <MENU>
            <MENU_ICONS>
              <DarkLightMode onClick={toggleTheme}>
                {
                  theme === 'light' ? <WiMoonAltWaningCrescent6/> : 
                  <WiMoonAltWaxingCrescent2 />
                }
              </DarkLightMode>
              <AddNote onClick={(event) => {
                newNote();
              }}>
                <MdAddCircle/>
              </AddNote>
            </MENU_ICONS>
          </MENU>
          <SCROLL>
          {notes && (
            <NoteList>
              {notes.filter((note) => doesNotMatchSearchTerm(note)).map((note) => (
                <li key={note.id}>
                  <LinkToNote id={note.id} title={note.title} />
                </li>
              ))}
            </NoteList>
          )}
          </SCROLL>
          <DIV_SEARCHBAR>
            <SEARCHBAR type={"search"} onChange={(e) => setSearchTerm(e.target.value)}/>
            <FiSearch/>
          </DIV_SEARCHBAR>
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
