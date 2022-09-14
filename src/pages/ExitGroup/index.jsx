import { Container } from "./style";
import { Content } from "./style";
import { ContentButton } from "./style";
import { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

const ExitGroup = () => {
  const [modalState, setModalState] = useState(false);

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
            <p>Deseja mesmo sair desse grupo? Iremos sentir sua falta!</p>
            <ContentButton>
              <Button titleButton={"SIM"} primary />
              <Button titleButton={"NÃO"} secondary />
            </ContentButton>
          </Content>
        </Modal>
      )}
    </Container>
  );
};

export default ExitGroup;
