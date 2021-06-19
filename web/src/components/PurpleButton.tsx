import React from "react";

interface Props {
  texto?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PurpleButton: React.FC<Props> = (props) => {
  return (
    <button className="purple-button" onClick={props.onClick}>
      {(props.texto)?? props.children}
    </button>
  );
};

export default PurpleButton;
