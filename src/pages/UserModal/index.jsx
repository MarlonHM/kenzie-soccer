import { Container } from "./style";
import { Content } from "./style";
import { ContentButton } from "./style";
import { useState } from "react";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

const UserModal = () => {
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
            <label>Nome:</label>
            <input
              type="text"
              name="name"
              placeholder="Ex: Nome de jogador"
            ></input>
            <label>Senha:</label>
            <input type="password" name="password" placeholder="******"></input>
            <ContentButton>
              <Button titleButton={"Salvar"} secondary />
            </ContentButton>
          </Content>
        </Modal>
      )}
    </Container>
  );
};

export default UserModal;
