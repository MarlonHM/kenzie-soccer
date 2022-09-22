import React from "react";
import { useState } from "react";
import { Container, Content, Global, Logo } from "./style";
import { MobileContent } from "./style.js";
import { FaReact } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GiOnTarget } from "react-icons/gi";
import { useHistory } from "react-router-dom";

import UserModal from "../UserModal";
import { useUser } from "../../providers/User";

export default function Sidebar() {
  const [Extends, setExtends] = useState(false);
  const [visible, setVisible] = useState(false);
  const { setToken } = useUser();
  const history = useHistory();

  const [modalUserState, setModalUserState] = useState(false);

  const handleExtend = () => {
    setExtends(!Extends);
  };

  const goTo = (location) => {
    history.push(location);
  };

  const logout = () => {
    history.push("/");
    localStorage.clear();
    setToken("");
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Global>
      <MobileContent>
        <FaBars onClick={handleVisible} />
      </MobileContent>
      {visible && (
        <Container Extends={Extends}>
          <Logo onClick={handleExtend}>
            <h3>
              {Extends ? (
                <>
                  Kenzie<span>Soccer</span>
                </>
              ) : (
                <>
                  K<span>S</span>
                </>
              )}
            </h3>
          </Logo>
          <Content Extends={Extends}>
            <li onClick={() => goTo("/dashboard")}>
              <FaHome />
              {Extends ? <h2>Dashboard</h2> : <></>}
            </li>
            <li onClick={() => goTo("/userguess")}>
              <GiOnTarget />
              {Extends ? <h2>Palpites</h2> : <></>}
            </li>
            <li onClick={() => setModalUserState(true)}>
              <FaUserEdit />
              {Extends ? <h2>Editar usuário</h2> : <></>}
            </li>

            <li onClick={() => logout()}>
              <FiLogOut />
              {Extends ? <h2>Logout</h2> : <></>}
            </li>
          </Content>
          {modalUserState && (
            <UserModal
              modalUserState={modalUserState}
              setModalUserState={setModalUserState}
            />
          )}
        </Container>
      )}
    </Global>
  );
}
