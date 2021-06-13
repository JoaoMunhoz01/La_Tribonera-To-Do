import React from "react";
import LoginForm from "../components/login/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="container">
      <aside>
        <div className="sidebar">
          <h2>Bem vindo ao</h2>
          <h1 className="text-dark">To Do</h1>
          <span className="descricao">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
      </aside>

      <main>
        <LoginForm />
      </main>
    </div>
  );
};

export default LoginPage;
