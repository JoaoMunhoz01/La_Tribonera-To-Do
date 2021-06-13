import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Navbar />
        </Route>

        <Route path="/login" exact>
          <LoginPage />
        </Route>


        <Route path="*">
          <h1>NOT FOUND</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
