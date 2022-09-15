import React from "react";
import { useState } from "react";
import { Container, Content, Logo } from "./style";
import { MobileContent } from "./style.js";
import { FaReact } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GiOnTarget } from "react-icons/gi";
import { useHistory } from "react-router-dom";

export default function Sidebar() {
  const [Extends, setExtends] = useState(false);
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const handleExtend = () => {
    setExtends(!Extends);
  };

  const goTo = (location) => {
    history.push(location);
  };

  const logout = () => {
    history.push("/");
    localStorage.clear();
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
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
            <li onClick={() => goTo("/guess")}>
              <GiOnTarget />
              {Extends ? <h2>Palpites</h2> : <></>}
            </li>
            <li onClick={() => history.push("/user")}>
              <FaUserEdit />
              {Extends ? <h2>Editar usuário</h2> : <></>}
            </li>
            <li onClick={() => goTo("/extra")}>
              <FaReact />
              {Extends ? <h2>Extra</h2> : <></>}
            </li>
            <li onClick={() => logout()}>
              <FiLogOut />
              {Extends ? <h2>Logout</h2> : <></>}
            </li>
          </Content>
        </Container>
      )}
    </>
  );
}
