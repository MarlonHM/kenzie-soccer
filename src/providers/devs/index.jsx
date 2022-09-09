import { createContext, useState } from "react";

export const DevsContext = createContext();

export const DevsProvider = ({ children }) => {
  const [devs] = useState([
    {
      id: 1,
      name: "Marlon Henrique",
      role: "Tech Leader",
      github: "https://github.com/MarlonHM",
      linkedin: "https://www.linkedin.com/in/marlon-henrique-machado",
    },
    {
      id: 2,
      name: "Jaqueline Pereira",
      role: "Product Owner",
      github: "https://github.com/JaquePerera",
      linkedin: "https://www.linkedin.com/in/jaqueline-silva-44584894",
    },
    {
      id: 3,
      name: "Jonathan da Silva",
      role: "Scrum Master",
      github: "https://github.com/johnnysza",
      linkedin: "https://www.linkedin.com/in/jonathansilvasza",
    },
    {
      id: 4,
      name: "Edson Rodrigues",
      role: "Quality Assurance",
      github: "https://github.com/edsonrdev",
      linkedin: "https://www.linkedin.com/in/edsssonrodrigues",
    },
    {
      id: 5,
      name: "Micaela Paulina",
      role: "Quality Assurance",
      github: "https://github.com/bluemoono",
      linkedin: "https://www.linkedin.com/in/micaela-paulina-de-carvalho",
    },
  ]);

  return (
    <DevsContext.Provider value={{ devs }}>{children}</DevsContext.Provider>
  );
};
