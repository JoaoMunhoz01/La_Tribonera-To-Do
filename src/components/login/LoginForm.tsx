import React from "react";
import PurpleButton from "../PurpleButton";
import Input from "../Input";
import RegisterText from "./RegisterText";

const onClick = (e: React.MouseEvent) => {
  e.preventDefault();
  // TODO:
  alert("TODO");
};

const LoginForm = () => {
  return (
    <form autoComplete="off">
      <Input type="email" nome="Email" />
      <Input type="password" nome="Senha" />
      <PurpleButton texto="Login" onClick={onClick} />
      <RegisterText />
    </form>
  );
};

export default LoginForm;
