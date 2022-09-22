import { useEffect } from "react";
import Button from "../../components/Button";
import ExitGroup from "../../components/ExitGroup";
import Dev from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { useGroupId } from "../../providers/Groups";
import { useUser } from "../../providers/User";
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

const GroupDetail = () => {
  const {
    groupId,
    groupData,
    setGroupData,
    modalState,
    setModalState,
    subscription,
  } = useGroupId();
  const { token } = useUser();
  const [modalEditGroup, setModalEditGroup] = useState(false);

  useEffect(() => {
    api
      .get(`/groups/${groupId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setGroupData([res.data]))
      .catch((res) => console.log(res));
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

                {group.ranking.includes(group.userId) ? (
                  <Button
                    secondary
                    titleButton="Inscrito"
                    onClick={() => setModalState(true)}
                  />
                ) : (
                  <Button
                    primary
                    titleButton="Inscrever-se"
                    onClick={() => subscription()}
                  />
                )}
              </ContentGroupData>
            );
          })}
          <div>{modalState && <ExitGroup />}</div>
          <GroupDescription>
            <TableDiv>
              <h3>Posição</h3>
              <h3>Usuário</h3>
              <h3>Pts Rodada</h3>
              <h3>Total</h3>
              <h4>1º</h4>
              <h4>Alexandre</h4>
              <h4>9</h4>
              <h4>9</h4>
              <h4>2º</h4>
              <h4>André</h4>
              <h4>8</h4>
              <h4>8</h4>
              <h4>3º</h4>
              <h4>Anthony</h4>
              <h4>7</h4>
              <h4>7</h4>
              <h4>4º</h4>
              <h4>Antonio</h4>
              <h4>7</h4>
              <h4>7</h4>
              <h4>5º</h4>
              <h4>Arthur</h4>
              <h4>6</h4>
              <h4>6</h4>
            </TableDiv>
            <DescriptionUser>
              <h3>Olá, Artur</h3>
              <section>
                Você está em <strong>5º lugar</strong>
              </section>
              <p>Pontuação nesta rodada:</p>
              <span>50 pontos</span>
              <p>Pontuação total:</p>
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
