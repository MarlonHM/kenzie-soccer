import { useEffect } from "react";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import Dev from "../../components/Footer";
import { UserContext } from "../../providers/User";
import api from "../../service";
import jwt_decode from "jwt-decode";
import Sidebar from "../../components/Sidebar";

import {
  CardGroup,
  Container,
  DivMessage,
  Form,
  Title,
  Top,
  Username,
} from "./style";
import { Buttons, Groups } from "./style";
import { Search } from "./style";
import { useHistory } from "react-router-dom";

import Ellipse from "../../assets/Ellipse.png";
import { useGroupId } from "../../providers/Groups";
import NewGroup from "../../components/NewGroup";

const Dashboard = () => {
  const { user, token } = useContext(UserContext);
  const { setGroupId, modalState, setModalState } = useGroupId();

  const [userData, setUserData] = useState([]);
  const [groups, setGroups] = useState([]);
  const [visible, setVisible] = useState(false);

  const infoUser = jwt_decode(token);
  const idUser = infoUser.sub;

  const history = useHistory();

  useEffect(() => {
    api
      .get("/groups", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setGroups(res.data);
        showMessage();
      })

      .catch((err) => console.log(err));
  }, []);

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

  const search = (param) => {
    api
      .get("/groups", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        setGroups(res.data.filter((item) => item.groupName.includes(param)));
      })
      .catch((err) => showMessage());
  };

  const myGroups = () => {
    api
      .get("/groups", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setGroups(
          res.data.filter((groups) => groups.userId === Number(idUser))
        );
      })
      .catch((err) => showMessage());
  };

  const allGroups = () => {
    api
      .get("/groups", { headers: { Authorization: `Bearer ${token}` } })
      .then((grp) => {
        setGroups(grp.data);
      })
      .catch((err) => console.log(err));
  };

  const showMessage = () => {
    if (groups.length < 1) {
      setVisible(true);
    }
  };

  const Detail = (id) => {
    setGroupId(id);
    history.push("/groupDetail");
  };

  return (
    <div>
      <Container>
        <Sidebar />
        <Top />
        <Username>
          <h3>É gool do {userData.name}!!</h3>
          <h2>Entre nos seus grupos e aposte no melhor time.</h2>
        </Username>
        <Search>
          <Form onSubmit={search}>
            <input
              type="text"
              placeholder="Pesquise um grupo"
              onChange={(e) => search(e.target.value)}
            />
          </Form>
          <Buttons>
            <Button primary titleButton="Todos os grupos" onClick={allGroups} />
            <Button secondary titleButton="Meus Grupos" onClick={myGroups} />
            <Button
              tertiary
              titleButton="Novo Grupo"
              onClick={() => setModalState(true)}
            />
          </Buttons>
        </Search>
        <div>{modalState && <NewGroup />}</div>
        <Groups>
          {groups.length > 0
            ? groups.map((group) => (
                <CardGroup key={group.id} onClick={() => Detail(group.id)}>
                  <img src={Ellipse} alt="Troféu" />
                  <Title>
                    <h3>{group.groupName}</h3>
                  </Title>
                </CardGroup>
              ))
            : visible && (
                <DivMessage>
                  <h2>Nenhum grupo encontrado, pesquise novamente!</h2>
                </DivMessage>
              )}
        </Groups>
      </Container>
      <Dev />
    </div>
  );
};

export default Dashboard;
