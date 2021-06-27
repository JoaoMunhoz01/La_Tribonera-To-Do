import React from "react";
import Task from "../../Task";
import TodoItem from "./TodoItem";

interface Props {
  tasks: Task[];
  onTaskDone: (index: number) => void;
  onTaskDelete: (index: number) => void;
}

const TodoList: React.FC<Props> = (props) => {
  return (
    <ul>
      <li className="white">
        <input type="text" placeholder="Adicionar Item" />
        <i className="fas fa-plus add-icon"></i>
      </li>

      {props.tasks.map((task, index) =>
        !task.done ? (
          <TodoItem
            task={task}
            onTaskDone={() => props.onTaskDone(index)}
            onTaskDelete={() => props.onTaskDelete(index)}
            key={index}
          />
        ) : null
      )}
    </ul>
  );
};

export default TodoList;
