import React from "react";
import { Link } from "react-router-dom";
import PurpleButton from "../PurpleButton";

interface Props {
  nome: string;
};

const HomeGreeting : React.FC<Props> = ({nome}) => {
  return (
    <div className="container-vertical justify-center">
    <h2>Olá,</h2>
    <h1 id="user-name" className="text-gradient">
      {nome}
    </h1>

    <PurpleButton>
      <Link to="/tarefas">Ir para tarefas</Link>
    </PurpleButton>
  </div>
  );
};

export default HomeGreeting;
