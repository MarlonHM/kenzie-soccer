import { useContext, useEffect } from "react";
import { createContext, useState } from "react";

import api from "../../service";
import { UserContext } from "../User";

export const MatchesContext = createContext();

export const MatchesProvider = ({ children }) => {
  const [matches, setMatches] = useState([]);
  const { token } = useContext(UserContext);

  useEffect(() => {
    api
      .get("/matches", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setMatches(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <MatchesContext.Provider value={{ matches }}>
      {children}
    </MatchesContext.Provider>
  );
};

export const useMatches = () => useContext(MatchesContext);
