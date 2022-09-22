import { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { UserContext } from "../providers/User";
import Sidebar from "../components/Sidebar";
import GroupDetail from "../pages/GroupDetail";

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
          {token ? <Redirect to="/dashboard" /> : <Login />}
        </Route>
        <Route path="/dashboard">
          {token ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/sidebar">
          <Sidebar />
        </Route>
        <Route path="/groupDetail">
          <GroupDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
