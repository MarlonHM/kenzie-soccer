import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { autenticated } from "../auth";
import Dashboard from "../pages/Dashboard";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Test from "../pages/Tests";
import UserModal from "../pages/UserModal";
import ExitGroup from "../pages/ExitGroup";
import SaveGuesses from "../pages/SaveGuesses";

export const privateAccess = ({ children }) => {
  return;
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user">
          <UserModal />
        </Route>
        <Route exact path="/exit">
          <ExitGroup />
        </Route>
        <Route exact path="/save">
          <SaveGuesses />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          {autenticated() ? <Dashboard /> : <Redirect to="/login" />}
          <Dashboard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;