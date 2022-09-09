import { Container } from "./style";

import LogoCatar from "../../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <div className="logo-container">
        <img src={LogoCatar} alt="Logo Catar" />
        <h1>Kenzie Soccer</h1>
      </div>

      <div className="buttons-container">
        <button>Fazer parte do time</button>
        <button>Entrar em campo</button>
      </div>
    </Container>
  );
};

export default Header;
