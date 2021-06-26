import React, { useEffect } from "react";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}

const Modal: React.FC<Props> = props => {
  const hideModalClick = (e: React.MouseEvent) => {
    let target = e.target as any;
    if (target.id === "modal") props.setShow(false);
  };

  const hideModalEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") props.setShow(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", hideModalEsc, false);
  }, []);

  return (
    <div
      id="modal"
      className={props.show ? "modal" : "disp-none"}
      onClick={hideModalClick}
    >
      <div className="card-modal">{props.children}</div>
    </div>
  );
};

export default Modal;
