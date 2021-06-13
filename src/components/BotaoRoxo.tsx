import React from "react";
import { Link } from "react-router-dom";

interface Props {
  texto: string;
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const BotaoRoxo: React.FC<Props> = (props) => {
  const inside = props.link ? (
    <Link to={props.link}>{props.texto}</Link>
  ) : (
    <div>{props.texto}</div>
  );

  return (
    <button className="purple-button" onClick={props.onClick}>
      {inside}
    </button>
  );
};

export default BotaoRoxo;
