import axios from "axios";
import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";
import TodoItem from "./TodoItem";

const DoneList: React.FC = () => {
  const { tasks, setTasks } = useContext(TaskContext);

  const onDone = (index: number) => {
    let newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);

    let data = {
      name: newTasks[index].name,
      id: newTasks[index].id,
      done: newTasks[index].done
    };

    axios.put('/api/tarefa', data);
  };

  const onDelete = (index: number) => {
    let newTasks = [...tasks];
    axios.delete('/api/tarefa/' + tasks[index].id);
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) =>
        task.done ? (
          <TodoItem
            task={task}
            onTaskDone={() => onDone(index)}
            onTaskDelete={() => onDelete(index)}
            key={index}
          />
        ) : null
      )}
    </ul>
  );
};

export default DoneList;
