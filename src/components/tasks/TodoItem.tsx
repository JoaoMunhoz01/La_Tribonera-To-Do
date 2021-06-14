import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Task from "../../Task";

interface Props {
  task: Task;
  onTaskDone: () => void;
  onTaskDelete: () => void;
}

const TodoItem: React.FC<Props> = (props) => {
  return (
    <li className="purple">
      <div className="left">
        <input
          type="checkbox"
          className="checkbox"
          checked={props.task.done}
          onChange={props.onTaskDone}
        />
        <span>{props.task.name}</span>
      </div>

      <div className="right">
        <span>
          <FontAwesomeIcon icon={faEdit} className="task-icons"/>
          <FontAwesomeIcon icon={faTrash} className="task-icons" onClick={props.onTaskDelete} />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
