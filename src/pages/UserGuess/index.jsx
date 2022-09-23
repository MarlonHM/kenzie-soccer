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
import { useContext } from "react";
import { MatchesContext } from "../../providers/Matches";
import { TeamsContext } from "../../providers/Teams";

const UserGuess = () => {
  const { matches } = useContext(MatchesContext);
  const { teams } = useContext(TeamsContext);

  const phaseGroup = matches.filter((match) => {
    return match.phase === "group";
  });

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
            {phaseGroup.map((match) => {
              let teamHome = teams.find((name) => {
                return name.id === match.team_home;
              });

              let teamAway = teams.find((name) => {
                return name.id === match.team_away;
              });
              let results = teams.find((name) => {
                return name.id === match.result;
              });

              return (
                <tr key={match.id}>
                  <td>Brasil</td>
                  <td className="jogo">
                    {teamHome.nameCountry} X {teamAway.nameCountry} -{" "}
                    {match.time}
                  </td>
                  <td>
                    {results === undefined ? "Empate" : results.nameCountry}
                  </td>
                  <td>10 pts</td>
                </tr>
              );
            })}
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
