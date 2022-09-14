import { Container } from "./style";
import { Content } from "./style";
import { ContentButton } from "./style";
import { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

const SaveGuesses = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <Container>
      <button onClick={() => setModalState(true)}>Abrir Modal de testes</button>
      {modalState && (
        <Modal
          title="Mudar nome do jogador"
          modalState={modalState}
          setModalState={setModalState}
        >
          <Content>
            <p>
              Os palpites salvos aqui servem para todos os grupos. Deseja
              salvar?
            </p>
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

export default SaveGuesses;
