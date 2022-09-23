import { Container } from "./style";
import {Link} from 'react-router-dom';
import LogoCatar from "../../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <div className="logo-container">
        <img src={LogoCatar} alt="Logo Catar" />
        <h1>Kenzie Soccer</h1>
      </div>

      <div className="buttons-container">
        <Link to='/signUp'><button>Fazer parte do time</button></Link>
        <Link to='/login'><button>Entrar em campo</button></Link>
      </div>
    </Container>
  );
};

export default Header;
