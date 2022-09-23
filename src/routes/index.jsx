import { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { UserContext } from "../providers/User";
import Sidebar from "../components/Sidebar";

import GroupDetail from "../pages/GroupDetail";

import UserGuess from "../pages/UserGuess";
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
        <Route path="/login">

          {!token ? <Login /> : <Redirect to="/dashboard" />}

        </Route>
        <Route path="/dashboard">
          {token ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/userguess">
          {token ? <UserGuess /> : <Redirect to="/login" />}
        </Route>
        <Route path="/sidebar">
          <Sidebar />
        </Route>

        <Route path="/groupDetail">
          <GroupDetail />
        </Route>

        <Route path="/new-guesses">
          {token ? <NewGuesses /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
