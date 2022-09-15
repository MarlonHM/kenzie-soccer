import { useContext } from "react";
import { createContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
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
      })
      .catch((err) => console.log(err));
  };

  const signUp = (data) => {
    api
      .post("/users", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ login, signUp, token }}>
      {" "}
      {children}{" "}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
