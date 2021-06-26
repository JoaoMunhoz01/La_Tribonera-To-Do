import React, { useState } from "react";
import PurpleButton from "../PurpleButton";
import Input from "../Input";
import RegisterText from "./RegisterText";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Alert from "../Alert";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const validateForm = () => {
    return email !== "" && password !== "";
  };

  const showAlertAndHide = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2500);
  };

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setAlertText("Preencha todos os campos!");
      showAlertAndHide();
      return;
    }

    axios
      .post("/api/login", { email, password })
      .then((res) => {
        if (res.data) {
          setSuccess(true);
        } else {
          setAlertText("Usuário ou senha inválido!");
          showAlertAndHide();
        }
      })
      .catch(() => {
        setAlertText("Erro de comunicação com o servidor.");
        showAlertAndHide();
      });
  };

  return success ? (
    <Redirect to="/" />
  ) : (
    <form className="form-container">
      <Alert text={alertText} show={showAlert} />

      <Input
        onChange={setEmail}
        autocomplete="email"
        type="email"
        nome="Email"
      />
      <Input onChange={setPassword} type="password" nome="Senha" />
      <PurpleButton texto="Login" onClick={onClick} />
      <RegisterText />
    </form>
  );
};

export default LoginForm;
