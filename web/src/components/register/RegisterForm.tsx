import axios, { AxiosResponse } from "axios";
import PurpleButton from "../PurpleButton";
import Input from "../Input";
import LoginText from "./LoginText";
import React, { useState } from "react";
import Alert from "./Alert";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");

  const isValidFormData = () => {
    if (email === "" || password === "" || name === "" || lastName === "")
      return false;
    return true;
  };

  const showInvalidFormAlert = () => {
    setAlertText("Preencha todos os campos.");
    showAlertAndHide();
  };

  const showResponseAlert = (res: AxiosResponse) => {
    let text = "Usuário cadastrado com sucesso.";

    if (!res.data) text = "Usuário já cadastrado.";

    setAlertText(text);
    showAlertAndHide();
  };

  const showAlertAndHide = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2500);
  };

  const sendForm = () => {
    let data = { email, password, name, lastName };

    if (!isValidFormData()) {
      showInvalidFormAlert();
      return;
    }

    axios
      .post("/api/registrar", data)
      .then((res) => showResponseAlert(res))
      .catch(() => {
        setAlertText("Erro de comunicação com o servidor.");
        showAlertAndHide();
      });
  };

  return (
    <form>
      <Alert text={alertText} show={showAlert} />

      <Input
        onChange={(e) => setName(e.target.value)}
        nome="Nome"
        autocomplete="given-name"
      />

      <Input
        onChange={(e) => setLastName(e.target.value)}
        nome="Sobrenome"
        autocomplete="family-name"
      />

      <Input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        nome="Email"
        autocomplete="email"
      />

      <Input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        nome="Senha"
      />

      <PurpleButton
        onClick={(e: React.FormEvent<HTMLButtonElement>) => {
          e.preventDefault();
          sendForm();
        }}
        texto="Registrar"
      />

      <LoginText />
    </form>
  );
};

export default RegisterForm;
