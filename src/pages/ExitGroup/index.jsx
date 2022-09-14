import { Container, Content, ContentButton, FormExit } from "./style";
import { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const ExitGroup = () => {
  const [modalState, setModalState] = useState(false);

  const history = useHistory();
  const { login } = useContext(UserContext);

  const { handleSubmit } = useForm();

  const singIn = (data) => {
    login(data);
    return history.push("/dashboard");
  };

  const handleCloseModal = (e) => {
    if (e.target.id === "modal-background") {
      setModalState(false);
    }
  };

  return (
    <Container>
      <button onClick={() => setModalState(true)}>Abrir Modal de testes</button>
      {modalState && (
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
                  onClick={(e) => handleCloseModal(e)}
                />
              </ContentButton>
            </FormExit>
          </Content>
        </Modal>
      )}
    </Container>
  );
};

export default ExitGroup;
