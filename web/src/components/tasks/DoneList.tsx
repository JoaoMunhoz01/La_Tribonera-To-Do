import React from "react";
import Task from "../../Task";
import TodoItem from "./TodoItem";

interface Props {
  tasks: Task[];
  onTaskDone: (index: number) => void;
  onTaskDelete: (index: number) => void;
}

const DoneList: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.tasks.map((task, index) =>
        task.done ? (
          <TodoItem
            task={task}
            onTaskDone={() => props.onTaskDone(index)}
            onTaskDelete={() => props.onTaskDelete(index)}
          />
        ) : null
      )}
    </ul>
  );
};

export default DoneList;
