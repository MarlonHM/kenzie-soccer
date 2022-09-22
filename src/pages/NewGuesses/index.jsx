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
  const {teams} = useContext(TeamsContext);
  const { matches } = useContext(MatchesContext);
  const { modalState, setModalState } = useGroupId();

  const [count, setCount] = useState(0);

  const [team1, setTeam1] = useState();
  const [team2, setTeam2] = useState();
  // const [time, setTime] = useState();
  const [playerGuess, setPlayerGuess] = useState();
  const [userData, setUserData] = useState([]);

  const infoUser = jwt_decode(token);
  const idUser = infoUser.sub;

  function next() {
    setCount(count + 1);
    console.log(count);
  }

  function previous() {
    if (count > 0) {
      setCount(count - 1);
      console.log(count);
    }
  }

  useEffect(() => {
    if (matches[count]?.phase === "group") {
      setTeam1(teams?.teams.find((id) => id.id === matches[count].team_home));
      setTeam2(teams?.teams.find((id) => id.id === matches[count].team_away));
    }
  }, [count]);

  // console.log("time", time);

  useEffect(() => {
    if (matches[count]?.phase === "round16") {
      alert("Espere a próxima rodada");
      setCount(0);
    }
    setTeam1(teams?.teams.find((id) => id.id === matches[count].team_home));
    setTeam2(teams?.teams.find((id) => id.id === matches[count].team_away));
  }, [matches]);

  // const guesses = () => {
  //   api
  //     .get(`/users/${idUser}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((res) => {
  //       setUserData(res.data);
  //     })
  //     .catch((err) => console.log(err));

  //   api
  //     .post("/guesses", { headers: { Authorization: `Bearer ${token}` } })
  //     .then((matches) => {
  //       setPlayerGuess(
  //         playerGuess.matches.find((id) => id.id === matches[count].id)
  //       );
  //       if (playerGuess === matches.result) {
  //         idUser.totalPhase(count + 10);
  //         idUser.totalScore(count + 10);
  //       }
  //     }
  //   };

  // };

  return (
    <div>
      <Container>
        <Sidebar />
        <Top />
        <Username>
          <h3>
            Eai,<span> palpiteiro</span>, vamos arriscar?
            <FaSave onClick={() => setModalState(true)} />
          </h3>
        </Username>
        <Title>
          <h3>Palpites de Hoje</h3>
        </Title>

        {/* <Time></Time> */}
        <Matches>
          <Teams>
            <span>{team1?.nameCountry}</span>
            <Flag src={imgObj[team1?.id - 1]} />
            <GuessButton>Vencedor</GuessButton>
          </Teams>

          <GuessButton>Empate</GuessButton>
          <Teams>
            <span>{team2?.nameCountry}</span>
            <Flag src={imgObj[team2?.id - 1]} />
            <GuessButton>Vencedor</GuessButton>
          </Teams>
        </Matches>
        <ButtonArea>
          <GuessButton onClick={() => previous()}>Jogo Anterior</GuessButton>
          <GuessButton onClick={() => next()}>Próximo Jogo</GuessButton>
        </ButtonArea>
        {modalState && (
          <SaveGuesses modalState={modalState} setModalState={setModalState} />
        )}
      </Container>
      {/* <Dev /> */}
    </div>
  );
};

export default NewGuesses;
