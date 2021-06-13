import React from "react";
import { Link, Redirect } from "react-router-dom";
import BotaoRoxo from "../BotaoRoxo";
import Input from "./Input";

const onClick = (e: React.MouseEvent) => {
  e.preventDefault();
  // TODO:
  alert("TODO");
};

const Form = () => {
  return (
    <form autoComplete="off">
      <Input type="email" nome="Email" />
      <Input type="password" nome="Senha" />

      <BotaoRoxo texto="Login" onClick={onClick} />

      <span className="register-text">
        Ainda não é registrado?
        <Link to="/register" className="text-gradient">
          Clique aqui
        </Link>
      </span>
    </form>
  );
};

export default Form;
