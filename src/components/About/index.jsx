import { Container } from "./style";
import MascotImg from "../../assets/mascot.png";

const AboutKenzieSoccer = () => {
  return (
    <Container>
      <div className="container">
        <h2>
          Sobre o <span>Kenzie Soccer</span>
        </h2>

        <div className="about-container">
          <div className="about-image">
            <img src={MascotImg} alt="Canarinho Pistola" />
          </div>

          <div className="about-text">
            <p>
              Kenzie Soccer é um aplicativo de apostas de Futebol direcionado
              aos jogos da <strong>Copa do Mundo 2022</strong>, no Catar.
            </p>

            <p>
              Foi criado pelos alunos do Front-End Noturno, da 
              <strong> Kenzie Academy Brasil</strong>, como Projeto Final (
              <strong>Capstone</strong>) para a conclusão do curso.
            </p>

            <p>
              Os apostadores poderão participar de disputas de palpites, optando por escolher o time
              vencedor da partida ou apostar em um empate.
            </p>

            <a href="/">Entrar para o time!</a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutKenzieSoccer;
