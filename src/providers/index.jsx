import { DevsProvider } from "./devs";
import { GroupProvider } from "./Groups";
import { GuessProvider } from "./guess";
import { MatchesProvider } from "./Matches";
import { TeamsProvider } from "./Teams";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <GroupProvider>
      <UserProvider>
        <TeamsProvider>
          <MatchesProvider>
            <GuessProvider>
              <DevsProvider>{children}</DevsProvider>
            </GuessProvider>
          </MatchesProvider>
        </TeamsProvider>
      </UserProvider>
    </GroupProvider>
  );
};

export default Providers;
