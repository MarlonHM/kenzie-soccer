import { DevsProvider } from "./devs";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return <UserProvider>
      <DevsProvider>{children}</DevsProvider>
    </UserProvider>;
};

export default Providers;
