import { useContext } from "react";
import { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
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
      })
      .catch((err) => console.log(err));
  };

  const signUp = (data) => {
    api
      .post("/users", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const getUser = () =>{
    api.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setUser(res.data)).catch(err => console.log(err))
  }

  const editUser = (data) =>{
    api.patch(`/users/${userId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => console.log(res)).catch(err=> console.log(err))
  }

  return (
    <UserContext.Provider value={{ login, signUp, token, getUser, user, setUser, editUser, privateGroup, setPrivateGroup }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
