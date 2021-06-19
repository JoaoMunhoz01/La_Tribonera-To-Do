import React from "react";

const WhiteButton: React.FC = (props) => {
  return <button className="white-button">{props.children}</button>;
};

export default WhiteButton;
