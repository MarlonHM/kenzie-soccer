import { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Test from "../pages/Tests";
import { UserContext } from "../providers/User";

const Routes = () => {
  const {token} = useContext(UserContext);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/login">
        {token ? <Redirect to="/dashboard"/> : <Login />}
        </Route>
        <Route path="/dashboard">
        {token ? <Dashboard /> : <Redirect to="/login"/>}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
