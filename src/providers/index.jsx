import { DevsProvider } from "./devs";
import { GroupProvider } from "./Groups";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <GroupProvider>
      <UserProvider>
        <DevsProvider>{children}</DevsProvider>
      </UserProvider>
    </GroupProvider>
  );
};

export default Providers;
