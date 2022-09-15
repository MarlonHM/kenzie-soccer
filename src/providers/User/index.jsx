import { createContext, useState } from "react";
import api from "../../service";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("@Kenzie-soccer: token") || ""
  );
  const login = (data) => {
    api
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("@Kenzie-soccer: token", res.data.accessToken);
        setToken(res.data.accessToken);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ login, token }}>
      {" "}
      {children}{" "}
    </UserContext.Provider>
  );
};
