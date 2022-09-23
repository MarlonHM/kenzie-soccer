import { DevsProvider } from "./devs";
import { GroupProvider } from "./Groups";
import { MatchesProvider } from "./Matches";
import { TeamsProvider } from "./Teams";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <GroupProvider>
      <UserProvider>
        <TeamsProvider>
          <MatchesProvider>
            <DevsProvider>{children}</DevsProvider>
          </MatchesProvider>
        </TeamsProvider>
      </UserProvider>
    </GroupProvider>
  );
};

export default Providers;
