import {
  Top,
  Container,
  Username,
  Title,
  Matches,
  Teams,
  Flag,
  GuessButton,
  Time,
} from "./style";
import Sidebar from "../../components/Sidebar";
import Dev from "../../components/Footer";

const NewGuesses = () => {
  return (
    <div>
      <Container>
        <Sidebar />
        <Top />
        <Username>
          <h3>
            Eai,<span> palpiteiro</span>, vamos arriscar?
          </h3>
        </Username>
        <Title>
          <h3>Palpites de Hoje</h3>
        </Title>
        <Time>Horário:</Time>
        <Matches>
          <Teams>
            <Flag />
            <GuessButton>Vencedor</GuessButton>
          </Teams>
          <GuessButton>Empate</GuessButton>
          <Teams>
            <Flag />
            <GuessButton>Vencedor</GuessButton>
          </Teams>
        </Matches>
      </Container>
      {/* <Dev /> */}
    </div>
  );
};

export default NewGuesses;
