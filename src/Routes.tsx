import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ListsPage from "./pages/ListsPage";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/login" exact>
          <LoginPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <Route path="/listas" exact>
          <ListsPage />
        </Route>

        <Route path="*">
          <h1>NOT FOUND</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
