import { Container, Content, ContentButton, FormSave } from "./style";
import { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const SaveGuesses = ({ modalState, setModalState }) => {
  const history = useHistory();
  const { login } = useContext(UserContext);

  const { handleSubmit } = useForm();

  const singIn = (data) => {
    login(data);
    return history.push("/dashboard");
  };
  const handleCloseModal = (e) => {
    setModalState(false);
  };

  return (
    <Container>
      <Modal
        title="Deseja salvar?"
        modalState={modalState}
        setModalState={setModalState}
      >
        <Content>
          <FormSave>
            <p>
              Os palpites salvos aqui servem para todos os grupos. Deseja
              salvar?
            </p>
            <ContentButton>
              <Button
                titleButton={"SIM"}
                primary
                onClick={handleSubmit(singIn)}
              />
              <Button
                titleButton={"NÃO"}
                secondary
                onClick={(e) => handleCloseModal(e)}
              />
            </ContentButton>
          </FormSave>
        </Content>
      </Modal>
    </Container>
  );
};

export default SaveGuesses;
