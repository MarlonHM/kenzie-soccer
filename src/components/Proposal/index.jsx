import { Container } from "./style";

import MemeImg1 from "../../assets/meme-1.png";
import MemeImg2 from "../../assets/meme-2.png";
import MemeImg3 from "../../assets/meme-3.png";
import MemeImg4 from "../../assets/meme-4.png";
import MemeImg5 from "../../assets/meme-5.png";
import MemeImg6 from "../../assets/meme-6.png";

const Proposal = () => {
  return (
    <Container>
      <div className="container">
        <h2>Nossa proposta</h2>

        <p>
          O Kenzie Soccer é baseado em palpites de jogos da Copa do Mundo 2022.
          O palpite consiste em decidir quem será o vencedor, ou se a partida
          vai terminar em um empate.
        </p>

        <div className="meme-container">
          <div>
            <img src={MemeImg1} alt="Meme imagem 1" />
          </div>
          <div>
            <img src={MemeImg2} alt="Meme imagem 2" />
          </div>
          <div>
            <img src={MemeImg3} alt="Meme imagem 3" />
          </div>
          <div>
            <img src={MemeImg4} alt="Meme imagem 4" />
          </div>
          <div>
            <img src={MemeImg5} alt="Meme imagem 5" />
          </div>
          <div>
            <img src={MemeImg6} alt="Meme imagem 6" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Proposal;
