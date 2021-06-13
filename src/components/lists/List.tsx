import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface Props {
  nome: string;
  onRemoverItem: () => void;
}

const List: React.FC<Props> = (props) => {
  return (
    <li className="purple">
      <div className="left">
        <span className="list-name">{props.nome}</span>
      </div>

      <div className="right">
        <span>
          <FontAwesomeIcon icon={faEdit} className="task-icons" />
          <FontAwesomeIcon
            icon={faTrash}
            className="task-icons"
            onClick={props.onRemoverItem}
          />
        </span>
      </div>
    </li>
  );
};

export default List;
