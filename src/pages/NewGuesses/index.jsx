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
  ButtonArea,
} from "./style";
import Sidebar from "../../components/Sidebar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/User";
import api from "../../service";
import { TeamsContext } from "../../providers/Teams";
import imgObj from "../../assets/ImgObj";
import { MatchesContext } from "../../providers/Matches";
import { FaSave } from "react-icons/fa";
import { useGroupId } from "../../providers/Groups";
import SaveGuesses from "../../components/SaveGuesses";
import jwt_decode from "jwt-decode";
// import Dev from "../../components/Footer";

const NewGuesses = () => {
  const { token } = useContext(UserContext);
  const teams = useContext(TeamsContext);
  const { matches } = useContext(MatchesContext);
  // const { modalState, setModalState } = useGroupId();

  const [count, setCount] = useState(0);

  const [team1, setTeam1] = useState();
  const [team2, setTeam2] = useState();


  const [team1Id, setTeam1Id] = useState();
  const [team2Id, setTeam2Id] = useState();
  const [matchId, setMatchId] = useState();


  const infoUser = jwt_decode(token);
  const idUser = infoUser.sub;

  function next() {
    setCount(count + 1);
  }

  function previous() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    if (matches[count]?.phase === "group") {
      setTeam1Id(matches[count].team_home);
      setTeam2Id(matches[count].team_away);
      setMatchId(matches[count].id);
      setTeam1(teams?.teams.find((id) => id.id === matches[count].team_home));
      setTeam2(teams?.teams.find((id) => id.id === matches[count].team_away));      
    }
     if (matches[count]?.phase === "round16") {
      alert("Espere a próxima rodada");
      setCount(0);
    }

  }, [count, matches]);

 


  const guesses = (teamId, matchId) => {
    api
      .post(
        "/guess",
        {
          userId: `${idUser}`,
          guess: `${teamId}`,
          matchesId: `${matchId}`,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        next();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

 

 

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



        <Matches>
          <Teams>
            <span>{team1?.nameCountry}</span>
            <Flag src={imgObj[team1?.id - 1]} />
            <GuessButton onClick={() => guesses(team1Id, matchId)}>
              Vencedor
            </GuessButton>
          </Teams>

          <GuessButton onClick={() => guesses(0, matchId)}>Empate</GuessButton>
          <Teams>
            <span>{team2?.nameCountry}</span>
            <Flag src={imgObj[team2?.id - 1]} />
            <GuessButton onClick={() => guesses(team2Id, matchId)}>
              Vencedor
            </GuessButton>
          </Teams>
        </Matches>
        {/* <ButtonArea>
          <GuessButton onClick={() => previous()}>Jogo Anterior</GuessButton>
          <GuessButton onClick={() => next()}>Próximo Jogo</GuessButton>
        </ButtonArea> */}
      </Container>
      {/* <Dev /> */}
    </div>
  );
};

export default NewGuesses;
