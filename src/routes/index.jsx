import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Test from "../pages/Tests";
import UserModal from "../pages/UserModal";
import ExitGroup from "../pages/ExitGroup";
import SaveGuesses from "../pages/SaveGuesses";

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
        <Route path="/testes">
          <Test />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
