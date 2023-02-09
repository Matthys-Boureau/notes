import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Form, Title, Content, ButtonSave, SaveAndStatus } from "./Note.styled";
import {TbChecks} from "react-icons/tb"
import { IconAndLabel } from "../iconAndLabel/inconAndLabel.styled";

const Note = () => {
  const { id } = useParams();

  const [note, setNote] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const fecthNote = useCallback(async () => {
    const response = await fetch(`/notes/${id}`);
    const note = await response.json();
    setNote(note);
  }, [id]);

  useEffect(() => {
    fecthNote();
  }, [id, fecthNote]);

  const saveNote = async () => {
    const response = await fetch(`/notes/${note.id}`, {
      method: "PUT",
      body: JSON.stringify(note),
      headers : {
        "Content-Type" : "application/json"
      }
    });
    if(response.ok){
      setIsSaved(true);
    }else{
      console.log('Erreur lors de la mise à jour de la note.');
    }
  };

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        saveNote();
      }}
    >
      <Title
        type="text"
        value={note ? note.title : ""}
        onChange={(event) => {
          setIsSaved(false);
          setNote({
            ...note,
            title: event.target.value,
          });
        }}
      />
      <Content
        value={note ? note.content : ""}
        onChange={(event) => {
          setIsSaved(false);
          setNote({
            ...note,
            content: event.target.value,
          });
        }}
      />
      <SaveAndStatus>
        <ButtonSave>SAVE</ButtonSave>
        {
        isSaved &&
        <IconAndLabel>
        <TbChecks />
        Enregistré
        </IconAndLabel>
        }
      </SaveAndStatus>
    </Form>
  );
};

export default Note;
