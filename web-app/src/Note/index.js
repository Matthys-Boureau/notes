import {Form, Title, Content} from "./Note.styled";

const Note = () => {
  return(
    <Form>
      <Title type='text' />
      <Content readOnly value={"contenue"}></Content>
      <button>Enregistrer</button>
    </Form>
  );
};

export default Note;