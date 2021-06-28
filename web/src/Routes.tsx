import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ListsPage from "./pages/ListsPage";
import TasksPage from "./pages/TasksPage";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact>
          <HomePage />
        </PrivateRoute>

        <Route path="/login" exact>
          <LoginPage />
        </Route>

        <Route path="/registrar" exact>
          <RegisterPage />
        </Route>

        <PrivateRoute path="/listas" exact>
          <ListsPage />
        </PrivateRoute>

        <PrivateRoute path="/tarefas" exact>
          <TasksPage />
        </PrivateRoute>

        <Route exact path="/logout">
          <Logout />
        </Route>

        <Route path="*">
          <h1>Página não encontrada</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
