import { Link } from "react-router-dom";
import {
  DivHeader,
  Section,
  TableSection,
  DivContainer,
  Footer,
} from "./sytle";
import Button from "../../components/Button";
import Dev from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

const UserGuess = () => {
  return (
    <DivContainer>
      <header>
        <Sidebar />
        <DivHeader>
          <h2>Palpites do campeão</h2>
          <Link to="/new-guesses">
            <Button primary titleButton="Novo Palpite" />
          </Link>
        </DivHeader>
      </header>

      <Section>
        <h2>Histórico de palpites</h2>
        <TableSection>
          <tbody>
            <tr>
              <th>Palpite</th>
              <th>Jogo</th>
              <th>Vencedor</th>
              <th>Pontos recebidos</th>
            </tr>
            <tr>
              <td>Brasil</td>
              <td className="jogo">Qatar X Brasil - 23/08 15:00</td>
              <td>Brasil</td>
              <td>10 pts</td>
            </tr>
            <tr>
              <td>Empate</td>
              <td className="jogo">Japão X Turquia - 23/08 17:00</td>
              <td>Japão</td>
              <td>0 pts</td>
            </tr>
            <tr>
              <td>Irã</td>
              <td className="jogo">Irã X Inglaterra - 21/08 10:00</td>
              <td>Inglaterra</td>
              <td>0 pts</td>
            </tr>
            <tr>
              <td>França</td>
              <td className="jogo">Frnça X Senegal - 22/08 08:30</td>
              <td>Senegal</td>
              <td>0 pts</td>
            </tr>
            <tr>
              <td>Turquia</td>
              <td className="jogo">Brasil X Turquia - 20/08 15:30</td>
              <td>Brasil</td>
              <td>0 pts</td>
            </tr>
            <tr>
              <td>Dinamarca</td>
              <td className="jogo">Uruguai X Dinamarca - 24/08 15:30</td>
              <td>Dinamarca</td>
              <td>10 pts</td>
            </tr>
            <tr>
              <td>Empate</td>
              <td className="jogo">Uruguai X Senegal - 25/08 15:30</td>
              <td>Empate</td>
              <td>10 pts</td>
            </tr>
            <tr>
              <td>Empate</td>
              <td className="jogo">Paraguai X Africa do Sul - 26/08 16:30</td>
              <td>Africa do Sul</td>
              <td>5 pts</td>
            </tr>
            <tr>
              <td>Espanha</td>
              <td className="jogo">Espanha X Eslovênia - 27/08 08:30</td>
              <td>Espanha</td>
              <td>10 pts</td>
            </tr>
            <tr>
              <td>Eslovênia</td>
              <td className="jogo">Eslovênia X Africa do Sul - 27/08 08:30</td>
              <td>Africa do Sul</td>
              <td>0 pts</td>
            </tr>
            <tr>
              <td>Empate</td>
              <td className="jogo">Camarões X Arabias 28/08 - 08:30</td>
              <td>Camarões</td>
              <td>5 pts</td>
            </tr>
          </tbody>
        </TableSection>
      </Section>

      <Footer>
        <Dev />
      </Footer>
    </DivContainer>
  );
};

export default UserGuess;
