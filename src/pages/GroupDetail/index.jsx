import { useEffect } from "react";
import Button from "../../components/Button";
import ExitGroup from "../../components/ExitGroup";
import Dev from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { useGroupId } from "../../providers/Groups";
import api from "../../service/";
import { FaPencilAlt } from "react-icons/fa";
import {
  Container,
  ContentGroupData,
  Top,
  ContentPage,
  TableDiv,
  GroupDescription,
  DescriptionUser,
} from "./style";
import { useState } from "react";
import EditGroup from "../../components/EditGroup";
import jwt_decode from "jwt-decode";

const GroupDetail = () => {
  const {
    groupId,
    groupData,
    setGroupData,
    modalState,
    setModalState,
    subscription,
  } = useGroupId();
  const token = localStorage.getItem("@Kenzie-soccer: token");
  const [modalEditGroup, setModalEditGroup] = useState(false);
  const [userData, setUserData] = useState([]);
  const [userRanking, setUserRanking] = useState([]);
  const [stateButton, setStateButton] = useState(false);

  const infoUser = jwt_decode(token);
  const idUser = infoUser.sub;

  useEffect(() => {
    api
      .get(`/groups/${groupId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setGroupData([res.data]);
      })
      .catch((res) => console.log(res));
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

  return (
    <div>
      <Top />
      <Container>
        <Sidebar />
        <ContentPage>
          {groupData.map((group) => {
            return (
              <ContentGroupData key={group.id}>
                <h3 key={group.id}>
                  {group.groupName}{" "}
                  <span>
                    <FaPencilAlt onClick={() => setModalEditGroup(true)} />
                  </span>{" "}
                </h3>
                {stateButton || group.ranking.includes(Number(idUser)) ? (
                  <Button
                    secondary
                    titleButton="Inscrito"
                    onClick={() => setModalState(true)}
                  />
                ) : (
                  <Button
                    primary
                    titleButton="Inscrever-se"
                    onClick={() => {
                      subscription();
                      setStateButton(true);
                    }}
                  />
                )}
              </ContentGroupData>
            );
          })}
          <div>{modalState && <ExitGroup />}</div>
          <GroupDescription>
            <TableDiv>
              <h3>Posi????o</h3>
              <h3>Usu??rio</h3>
              <h3>Pts Rodada</h3>
              <h3>Total</h3>
              <h4>1??</h4>
              <h4>Alexandre</h4>
              <h4>9</h4>
              <h4>9</h4>
              <h4>2??</h4>
              <h4>Andr??</h4>
              <h4>8</h4>
              <h4>8</h4>
              <h4>3??</h4>
              <h4>Anthony</h4>
              <h4>7</h4>
              <h4>7</h4>
              <h4>4??</h4>
              <h4>Antonio</h4>
              <h4>7</h4>
              <h4>7</h4>
              <h4>5??</h4>
              <h4>Arthur</h4>
              <h4>6</h4>
              <h4>6</h4>
            </TableDiv>
            <DescriptionUser>
              <h3>Ol??, {userData.name}</h3>
              <section>
                Voc?? est?? em <strong>5?? lugar</strong>
              </section>
              <p>Pontua????o nesta rodada:</p>
              <span>50 pontos</span>
              <p>Pontua????o total:</p>
              <span>150 pontos</span>
            </DescriptionUser>
          </GroupDescription>
          {modalEditGroup && (
            <EditGroup
              modalEditGroup={modalEditGroup}
              setModalEditGroup={setModalEditGroup}
            />
          )}
        </ContentPage>
      </Container>
      <Dev />
    </div>
  );
};

export default GroupDetail;
