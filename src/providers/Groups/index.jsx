import { useContext } from "react";
import { createContext, useState } from "react";
import { UserContext } from "../User";
import jwt_decode from "jwt-decode";
import api from "../../service";
import { toast } from "react-toastify";
import { Link, Redirect, useHistory } from "react-router-dom";

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const history = useHistory();
  const [groupId, setGroupId] = useState();
  const [groupData, setGroupData] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [userData, setUserData] = useState([]);

  const token = localStorage.getItem("@Kenzie-soccer: token");

  const infoUser = token && jwt_decode(token);
  const user = infoUser && infoUser.sub;

  const creatGroup = (data) => {
    api.post('/groups',data, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => console.log(res)).catch(err => console.log(err))
  }

  const editGroup = (data) =>{
    api.patch(`/groups/${groupId}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => console.log(res)).catch(err => console.log(err))
  }

  const deleteGroup = () => {
    api.delete(`/groups/${groupId}`, {
      headers: { Authorization: `Bearer ${token}` }}).then(res => console.log(res)).catch(err => console.log(err))
  }

  const updateUSer = () => {
    api
      .patch(
        `/users/${user}`,
        {
          groups: [...userData, groupId],
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => console.log("user", res))
      .catch((err) => console.log("erro", err));
  };

  const subscription = () => {
    const { ranking } = groupData[0];

    api
      .patch(
        `/groups/${groupId}`,
        {
          ranking: [...ranking, Number(user)],
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => toast.success("Inscrito com sucesso!"))
      .catch((err) => console.log("erro", err));

    api
      .get(`/users/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUserData(res.data.groups))
      .then(() => updateUSer())
      .catch((err) => console.log("erro", err));
  };

  const unsubscription = () => {
    const { ranking } = groupData[0];
    api
      .patch(
        `/groups/${groupId}`,
        {
          ranking: [...ranking, Number(user)],
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => toast.success("Inscrito com sucesso!"))
      .catch((err) => console.log("erro", err));

    api
      .get(`/users/${user}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUserData(res.data.groups))
      .then(() => updateUSer())
      .catch((err) => console.log("erro", err));
  }

  return (
    <GroupContext.Provider
      value={{
        groupId,
        setGroupId,
        groupData,
        setGroupData,
        modalState,
        setModalState,
        subscription,
        creatGroup,
        editGroup,
        deleteGroup
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export const useGroupId = () => useContext(GroupContext);
