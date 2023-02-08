import { useState, useEffect, useCallback } from "react";
import {useParams} from "react-router-dom"
import {Form, Title, Content} from "./Note.styled";

const Note = () => {
  const { id } = useParams();

  const [note, setNote] = useState(null);

  const fecthNote = useCallback(async () => {
    const response = await fetch(`/notes/${id}`);
    const note = await response.json();
    setNote(note);
  }, [id]);

  useEffect(() => {
    fecthNote();
  }, [id, fecthNote]);

  console.log({id});


  return(
    <Form>
      <Title type='text' value={note ? note.title : ""}/>
      <Content readOnly value={note ? note.content : ""}></Content>
      <button>Enregistrer</button>
    </Form>
  );
};

export default Note;