import { Container } from "./style";

import Header from "../../components/Header";
import About from "../../components/About";
import Proposal from "../../components/Proposal";
import RulesAndBenefits from "../../components/RulesAndBenefits";
import DevelopersTeam from "../../components/DevelopersTeam";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <Container>
      <Header />

      <main>
        <About />
        <Proposal />
        <RulesAndBenefits />
        <DevelopersTeam />
      </main>

      <Footer />
    </Container>
  );
};

export default Home;
