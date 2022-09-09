import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Test from "../pages/Tests";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/testes">
          <Test/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
