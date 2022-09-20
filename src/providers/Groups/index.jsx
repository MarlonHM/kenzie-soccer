import { useContext } from "react";
import { createContext, useState } from "react";

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [groupId, setGroupId] = useState();

  return (
    <GroupContext.Provider value={{ groupId, setGroupId }}>
      {" "}
      {children}{" "}
    </GroupContext.Provider>
  );
};

export const useGroupId = () => useContext(GroupContext);
