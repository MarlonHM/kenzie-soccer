import { Container } from "./style";
import { useState } from "react";

import Header from "../../components/Header";
import About from "../../components/About";
import Proposal from "../../components/Proposal";
import RulesAndBenefits from "../../components/RulesAndBenefits";
import DevelopersTeam from "../../components/DevelopersTeam";
import Footer from "../../components/Footer";

import Modal from "../../components/Modal";

const Home = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <Container>
      <Header />

      <button onClick={() => setModalState(true)}>Abrir Modal de testes</button>

      <main>
        <About />
        <Proposal />
        <RulesAndBenefits />
        <DevelopersTeam />
      </main>

      <Footer />

      {modalState && (
        <Modal
          title="Modal de teste"
          modalState={modalState}
          setModalState={setModalState}
        >
          {/* aqui vai o conteúdo do corpo do modal */}
          <p>Mudar nome do jogador</p>
        </Modal>
      )}
    </Container>
  );
};

export default Home;
