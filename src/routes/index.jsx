import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { autenticated } from "../auth";
import Dashboard from "../pages/Dashboard";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Test from "../pages/Tests";

export const privateAccess = ({children}) => {return }

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/testes">
        {autenticated() ? <Test /> : <Redirect to="/login"/>}
        </Route>
        <Route path="/login">
        {!autenticated() ? <Login /> : <Redirect to="/dashboard"/>}
        </Route>
        <Route path="/dashboard">
        {autenticated() ? <Dashboard /> : <Redirect to="/login"/>}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
