import { Container } from "./style";

import { useContext } from "react";
import { DevsContext } from "../../providers/devs";

import Dev from "../Dev";

const DevelopersTeam = () => {
  const { devs } = useContext(DevsContext);

  return (
    <Container>
      <div className="container">
        <h2>Time de Desenvolvedores</h2>

        <div className="developers">
          {devs.map((dev) => (
            <Dev key={dev.id} dev={dev} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DevelopersTeam;
