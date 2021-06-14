import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ListsPage from "./pages/ListsPage";
import CalendarPage from "./pages/CalendarPage";
import TasksPage from "./pages/TasksPage";

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

        <Route path="/register" exact>
          <RegisterPage />
        </Route>

        <Route path="/listas" exact>
          <ListsPage />
        </Route>

        <Route path="/calendario" exact>
          <CalendarPage />
        </Route>

        <Route path="/tarefas" exact>
          <TasksPage />
        </Route>

        <Route path="*">
          <h1>NOT FOUND</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
