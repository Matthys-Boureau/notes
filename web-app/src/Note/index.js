import { useState, useEffect, useCallback } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { Form, Title, Content, ButtonSave, SaveAndStatus, Loader, ErrorMessage} from "./Note.styled";
import {TbChecks} from "react-icons/tb"
import {GiSaveArrow} from "react-icons/gi"
import {MdDeleteForever} from "react-icons/md"
import { IconAndLabel } from "../iconAndLabel/inconAndLabel.styled";
import {ButtonRetour, FullHeightAndWidthCentered, TextSuppression} from "../App.Style";
import { DeleteButton } from "./Note.styled";

const Note = ({onSave, onDelete}) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [note, setNote] = useState(null);
  const [getStatus, setGetStatus] = useState("IDLE");

  const retour = () => {
    navigate('/')
  }

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
    if(note.title === ""){
      note.title = `Note ${note.id}`
    }
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

  const deleteNote = async () => {
    const response = await fetch(`/notes/${note.id}`,{
      method: "DELETE",
      headers : {
        "Content-Type" : "application/json"
      }
    });
    if(response.ok){
      setGetStatus("DELETE");
      onDelete(note.id);
    }
  }

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


  if (getStatus === "DELETE") {
    return(
      <FullHeightAndWidthCentered>
        <TextSuppression>{note.title} à été supprimé avec succès</TextSuppression>
        <ButtonRetour onClick={retour}>
          Retour
        </ButtonRetour>
      </FullHeightAndWidthCentered>
    )
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
        <ButtonSave>
          <GiSaveArrow />
        </ButtonSave>
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
        <DeleteButton type="button"
        onClick={(event) =>{
          deleteNote();
        }}
        >
          <MdDeleteForever />
        </DeleteButton>
      </SaveAndStatus>
    </Form>
  );
};

export default Note;
