import { useContext } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../service";
import jwt_decode from "jwt-decode";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [privateGroup, setPrivateGroup] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("@Kenzie-soccer: token") || ""
  );
  const infoUser = token && jwt_decode(token);
  const userId = infoUser && infoUser.sub;


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

  const getUser = () =>{
    api.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setUser(res.data)).catch(err => console.log(err))
  }

  getUser();

  const editUser = (data) =>{
    api.patch(`/users/${userId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
    setTimeout(window.location.reload(false), 10000)
    toast.success("Usuário foi editado com sucesso!")
      }).catch((err)=> toast.error("Ops, algo deu errado! Tente depois :D"))
  }

  return (

    <UserContext.Provider value={{ login, signUp, token, getUser, setToken, user, setUser, editUser, privateGroup, setPrivateGroup }}>

      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
