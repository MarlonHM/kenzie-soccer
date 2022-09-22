import { useContext, useEffect } from "react";
import { createContext, useState } from "react";

import api from "../../service";
import { UserContext } from "../User";

export const TeamsContext = createContext();

export const TeamsProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const { token } = useContext(UserContext);

  useEffect(() => {
    api
      .get("/teams", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setTeams(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <TeamsContext.Provider value={{ teams }}>{children}</TeamsContext.Provider>
  );
};

export const useTeams = () => useContext(TeamsContext);
