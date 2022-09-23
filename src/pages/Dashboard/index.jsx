import { useEffect } from "react";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import Dev from "../../components/Footer";
import { UserContext } from "../../providers/User";
import api from "../../service";
import jwt_decode from "jwt-decode";
import Sidebar from "../../components/Sidebar";
import { Return } from "../../components/ReturnButton";

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
import DashComponent from "../../components/DashComponent";

const Dashboard = () => {
  const { user, token } = useContext(UserContext);
  const { setGroupId, modalState, setModalState } = useGroupId();

  const [userData, setUserData] = useState([]);
  const [groups, setGroups] = useState([]);
  const [visible, setVisible] = useState(false);

  const infoUser = jwt_decode(token);
  const idUser = infoUser.sub;

  const history = useHistory();

  return (
    <div>
      <Container>
        <Sidebar />
        <Top />
        <div>{modalState && <NewGroup />}</div>
          <DashComponent />

      </Container>
      <Dev />
    </div>
  );
};

export default Dashboard;
