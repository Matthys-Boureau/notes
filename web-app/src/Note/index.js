import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Form, Title, Content, ButtonSave, SaveAndStatus, Loader, ErrorMessage } from "./Note.styled";
import {TbChecks} from "react-icons/tb"
import { IconAndLabel } from "../iconAndLabel/inconAndLabel.styled";
import {FullHeightAndWidthCentered} from "../App.Style";

const Note = ({onSave}) => {
  const { id } = useParams();

  const [note, setNote] = useState(null);
  const [getStatus, setGetStatus] = useState("IDLE");

  const fecthNote = useCallback(async () => {
    setGetStatus("LOADING");
    const response = await fetch(`/notes/${id}`);
    const note = await response.json();
    if(response.ok){
      setNote(note);
      setGetStatus("IDLE");
    } else{
      setGetStatus("ERROR");
    }
  }, [id]);

  useEffect(() => {
    fecthNote();
  }, [id, fecthNote]);

  const saveNote = async () => {
    setGetStatus("LOADING")
    const response = await fetch(`/notes/${note.id}`, {
      method: "PUT",
      body: JSON.stringify(note),
      headers : {
        "Content-Type" : "application/json"
      }
    });
    if(response.ok){
      setGetStatus("SAVED");
      onSave(note);
      // update notes to resfresh title in side bar
    }else{
      setGetStatus("ERROR");
    }
  };

  if(getStatus === "LOADING") {
    return(
      <FullHeightAndWidthCentered>
        <Loader />
      </FullHeightAndWidthCentered>
    );
  }

  if (getStatus === "ERROR") {
    return(
      <FullHeightAndWidthCentered>
        404 : La note {id} n'existe pas !
      </FullHeightAndWidthCentered>
    );
  }


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
          setGetStatus("IDLE");
          setNote({
            ...note,
            title: event.target.value,
          });
        }}
      />
      <Content
        value={note ? note.content : ""}
        onChange={(event) => {
          setGetStatus("IDLE");
          setNote({
            ...note,
            content: event.target.value,
          });
        }}
      />
      <SaveAndStatus>
        <ButtonSave>SAVE</ButtonSave>
        {
        getStatus === "SAVED" ?(
        <IconAndLabel>
        <TbChecks />
        </IconAndLabel>
        ): getStatus === "ERROR" ?(
          <ErrorMessage>Erreur lors de la sauvegarde</ErrorMessage>
        ) : getStatus === "LOADING" ? (
          <Loader/>
        ) : null}
      </SaveAndStatus>
    </Form>
  );
};

export default Note;
