import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useContext } from "react";
import { TaskContext } from "./TaskContext";
import Task from "../../Task";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const { tasks, setTasks, currentList } = useContext(TaskContext);

  const sendForm = (e: FormEvent | MouseEvent) => {
    e.preventDefault();
    axios.post("/api/tarefa", { name: input, list: currentList }).then(res => {
      let newTasks = [...tasks];
      let newTask: Task = { name: input, done: false, id: res.data };
      newTasks.push(newTask);
      setTasks(newTasks);
    });
    setInput("");
  };

  return (
    <form onSubmit={sendForm}>
      <li className="white">
        <input
          type="text"
          placeholder="Adicionar Item"
          value={input}
          onChange={e => setInput(e.target.value)}
        />

        <FontAwesomeIcon
          icon={faPlus}
          className="add-icon"
          onClick={sendForm}
        />
      </li>
    </form>
  );
};

export default TodoInput;
