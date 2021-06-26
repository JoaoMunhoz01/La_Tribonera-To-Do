import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import List from "../../List";

interface Props {
  list: List;
  onRemoveList: () => void;
}

const ListCard: React.FC<Props> = (props) => {
  return (
    <li className="purple">
      <div className="left">
        <span className="list-name">{props.list.name}</span>
      </div>

      <div className="right">
        <span>
          <FontAwesomeIcon icon={faEdit} className="task-icons" />
          <FontAwesomeIcon
            icon={faTrash}
            className="task-icons"
            onClick={props.onRemoveList}
          />
        </span>
      </div>
    </li>
  );
};

export default ListCard;
