import { Container } from "./style";

import PartyImg from "../../assets/party.png";
import TrophyImg from "../../assets/trophy.png";
import HeartImg from "../../assets/heart.png";

const RulesAndBenefits = () => {
  return (
    <Container>
      <div className="container">
        <h2>
          <span>Regras do Jogo</span>
        </h2>

        <div className="internal-container">
          <p>
            Na aplicação existem grupos (públicos ou privados) onde os
            participantes deverão informar palpites para os jogos de cada fase
            (Grupos, Oitavas, Quartas, Semifinais, 3º Lugar e Final).
          </p>

          <p>
            Cada palpite tem um prazo máximo para ser realizado, não podendo
            mais ser efetuado após o início do respectivo jogo.
          </p>

          <h3>Critérios de pontuação:</h3>

          <ul>
            <li>
              <strong>Pontos Corridos</strong>: vence quem somar mais pontos ao
              final da Copa.
            </li>
            <li>
              <strong>Acertou Vencedor</strong>: ganha 10 pontos.
            </li>
            <li>
              <strong>Acertou Empate</strong>: ganha 5 pontos.
            </li>
            <li>
              <strong>Palpite errado</strong>: nem ganha nem perde pontos.
            </li>
          </ul>

          <h3>Critério de desempate:</h3>

          <ul>
            <li>
              Em caso de empate, vence quem acertou mais vezes{" "}
              <strong>Vencedor</strong>.
            </li>
          </ul>
        </div>

        <h2>
          <span>Benefícios</span>
        </h2>

        <div className="benefits">
          <div>
            <img src={PartyImg} alt="Festa de todos" />
            <span>Festa de todos</span>
            <p>
              Incentivar as pessoas para participar de uma festa mundial como a
              Copa.
            </p>
          </div>

          <div>
            <img src={TrophyImg} alt="Espírito esportivo" />
            <span>Espírito esportivo</span>
            <p>
              Conhecer novas pessoas e participar de grupos para aflorar o
              espirito esportivo.
            </p>
          </div>

          <div>
            <img src={HeartImg} alt="Paixão pelo Canarinho" />
            <span>Paixão pelo Canarinho</span>
            <p>
              Renovar o sonho de sermos campeões novamente mantendo viva a nossa
              paixão pelo futebol.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RulesAndBenefits;
