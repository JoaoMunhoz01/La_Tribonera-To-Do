import axios from "axios";
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

  const sendForm = () => {
    let data = {
      email,
      password,
      name,
      lastName,
    };

    if (
      data.email === "" ||
      data.password === "" ||
      data.name === "" ||
      data.lastName === ""
    ) {
      setAlertText("Preencha todos os campos.");
      setShowAlert(true);

      setTimeout(() => setShowAlert(false), 2500);

      return;
    }

    axios
      .post("http://localhost:3000/api/registrar", data)
      .then((res) => {
        console.log(res.data);

        if (res.data) {
          setAlertText("Usuário cadastrado com sucesso.");
        } else {
          setAlertText("Usuário já cadastrado.");
        }

        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2500);
      })
      .catch(() => setAlertText("Erro de comunicação com o servidor."));
  };

  return (
    <form>
      <Alert text={alertText} show={showAlert} />

      <Input onChange={(e) => setName(e.target.value)} nome="Nome" />

      <Input onChange={(e) => setLastName(e.target.value)} nome="Sobrenome" />

      <Input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        nome="Email"
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
