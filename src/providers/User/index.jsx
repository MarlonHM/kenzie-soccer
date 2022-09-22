import { useContext } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
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
        setToken(res.data.accessToken);
        localStorage.setItem("@Kenzie-soccer: token", res.data.accessToken);
        toast.success("Usuário logado com sucesso!");
      })
      .catch((err) => toast.error("Usuário ou senha incorretos!"));
  };

  const signUp = (data) => {
    api
      .post("/users", data)
      .then((res) => toast.success("Usuário cadastrado com sucesso!"))
      .catch((err) => toast.error("Usuário ou senha incorretos!"));
  };

  return (
    <UserContext.Provider value={{ login, signUp, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
