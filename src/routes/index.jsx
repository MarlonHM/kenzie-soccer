import { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { UserContext } from "../providers/User";
import UserModal from "../pages/UserModal";
import ExitGroup from "../pages/ExitGroup";
import SaveGuesses from "../pages/SaveGuesses";
import NewGroup from "../pages/NewGroup";
import EditGroup from "../pages/EditGroup";
import Sidebar from "../components/Sidebar";
import NewGuesses from "../pages/NewGuesses";

const Routes = () => {
  const { token } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/signUp">
          <SignUp />
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

        <Route exact path="/newgroup">
          <NewGroup />
        </Route>

        <Route exact path="/EditGroup">
          <EditGroup />
        </Route>

        <Route path="/login">
          {token ? <Redirect to="/dashboard" /> : <Login />}
        </Route>
        <Route path="/dashboard">
          {token ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/sidebar">
          <Sidebar />
        </Route>
        <Route path="/new-guesses">
          {token ? <NewGuesses /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
