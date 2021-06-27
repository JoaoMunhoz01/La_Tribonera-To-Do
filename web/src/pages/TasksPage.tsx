import { useState } from "react";
import Navbar from "../components/Navbar";
import DoneList from "../components/tasks/DoneList";
import SearchBar from "../components/tasks/SearchBar";
import { TaskProvider } from "../components/tasks/TaskContext";
import TodoList from "../components/tasks/TodoList";
import Task from "../Task";
import ListSelect from "./ListSelect";

// Pra testar
const test_tasks = [
  new Task("A"),
  new Task("B"),
  new Task("C"),
  new Task("D"),
  new Task("E"),
  new Task("F"),
];

test_tasks[3].done = true;
test_tasks[4].done = true;
test_tasks[5].done = true;

const TasksPage = () => {
  let [tasks, setTasks] = useState(test_tasks);

  const onTaskDone = (index: number) => {
    let newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

	const onTaskDelete = (index: number) => {
		let newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	};

  return (
    <div>
      <Navbar />
      <div className="container-vertical align-center">
        <h1 className="title">Tarefas</h1>

        <TaskProvider>
				  <ListSelect />
          <SearchBar />

          <TodoList
            tasks={tasks}
            onTaskDone={onTaskDone}
            onTaskDelete={onTaskDelete}
          />

          <h3>Concluídas</h3>

          <DoneList
            tasks={tasks}
            onTaskDone={onTaskDone}
            onTaskDelete={onTaskDelete}
            />
        </TaskProvider>
      </div>
    </div>
  );
};

export default TasksPage;
