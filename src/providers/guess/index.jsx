import { useContext } from "react";
import { createContext, useState } from "react";
import api from "../../service";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { MatchesContext } from "../Matches";
export const GuessContext = createContext();

export const GuessProvider = ({ children }) => {
  const { matches } = useContext(MatchesContext);
  const [guess, setGuess] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [matchScore, setMatchScore] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("@Kenzie-soccer: token") || ""
  );
  const infoUser = token && jwt_decode(token);
  const userId = infoUser && infoUser.sub;

  console.log("palpitesguess", guess);
  console.log("totalscore", totalScore);

  //   const results = () => {
  //     guess.map((item) => {
  //       matches.map((match) => {
  //         if (match.id === item.matchesId) {
  //           if (item.guess === match.result) {
  //             if (match.result === 0) {
  //               setTotalScore((oldScore) => oldScore + 5);
  //               setMatchScore(...matchScore, { id: match.id, score: 5 });
  //             } else {
  //               setTotalScore((oldScore) => oldScore + 10);
  //               setMatchScore(...matchScore, { id: match.id, score: 10 });
  //             }
  //           }
  //         }
  //       });
  //     });

  // };

  useEffect(() => {
    api
      .get(`/guess?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setGuess(res.data);
        let total = 0;
        res.data.map((item) => {
          matches.map((match) => {
            if (match.id === item.matchesId) {
              if (item.guess === match.result) {
                if (match.result === 0) {
                  total += 5;
                  setMatchScore([...matchScore, { id: match.id, score: 5 }]);
                } else {
                  total += 10;
                  setMatchScore([...matchScore, { id: match.id, score: 10 }]);
                }
              }
            }
          });
        });
        setTotalScore(total);

        return total;
      })
      .then((total) =>
        api
          .patch(
            `/users/${userId}`,
            {
              totalScore: total,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((res) => setGuess(res.data))
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
  }, [matches]);

  return (
    <GuessContext.Provider value={{ guess, matchScore, totalScore }}>
      {children}
    </GuessContext.Provider>
  );
};

export const useGuess = () => useContext(GuessContext);
