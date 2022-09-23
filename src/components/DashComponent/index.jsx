import { Container, Username, DescriptionUser } from "./style";
import MascotImg from "../../assets/mascot.png";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { useEffect } from "react";
import api from "../../service";
import jwt_decode from "jwt-decode";


const DashComponent = () => {
  const {user, token} = useContext(UserContext);
  const [userData, setUserData] = useState([]);
  console.log(userData)

  console.log(user)

  const infoUser = jwt_decode(token);
  const idUser = infoUser.sub;

  useEffect(() => {
    api
      .get(`/users/${idUser}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <div className="container">

      <Username>
          <h2 className="yellow">É gool {userData.name}!!</h2>
          <h3>Bem vindo confira sua pontuação!</h3>
        </Username>

        <div className="about-container">
        <div className="about-image">
            <img src={MascotImg} alt="Canarinho Pistola" />
          </div>
          <div className="about-text">

          <DescriptionUser>
              <section>
              <h3>Olá, {userData.name}</h3>
              <p><strong>Pontuação nesta rodada:</strong> <br /> <span>50 pontos</span></p>
              <p><strong>Pontuação total:</strong> <br /> <span>150 pontos</span></p>
              </section>
            </DescriptionUser>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DashComponent;
