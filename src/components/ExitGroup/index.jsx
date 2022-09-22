import { Container, Content, ContentButton, FormExit } from "./style";
import { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGroupId } from "../../providers/Groups";

const ExitGroup = () => {
  const { modalState, setModalState } = useGroupId();

  const history = useHistory();
  const { login } = useContext(UserContext);

  const { handleSubmit } = useForm();

  const singIn = (data) => {
    login(data);
    return history.push("/dashboard");
  };

  const handleCloseModal = () => {
    setModalState(false);
  };

  return (
    <Container>
      <Modal
        title="Precisa de despedir?"
        modalState={modalState}
        setModalState={setModalState}
      >
        <Content>
          <FormExit>
            <p>Deseja mesmo sair desse grupo? Iremos sentir sua falta!</p>
            <ContentButton>
              <Button
                titleButton={"SIM"}
                primary
                onClick={handleSubmit(singIn)}
              />
              <Button
                titleButton={"NÃO"}
                secondary
                onClick={(e) => handleCloseModal()}
              />
            </ContentButton>
          </FormExit>
        </Content>
      </Modal>
    </Container>
  );
};

export default ExitGroup;
