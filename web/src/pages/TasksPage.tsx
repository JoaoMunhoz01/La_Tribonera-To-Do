import Navbar from "../components/Navbar";
import DoneList from "../components/tasks/DoneList";
import SearchBar from "../components/tasks/SearchBar";
import { TaskProvider } from "../components/tasks/TaskContext";
import TodoList from "../components/tasks/TodoList";
import ListSelect from "./ListSelect";

const TasksPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container-vertical align-center">
        <h1 className="title">Tarefas</h1>

        <TaskProvider>
          <ListSelect />
          <SearchBar />

          <TodoList />

          <h3>Concluídas</h3>

          <DoneList />
        </TaskProvider>
      </div>
    </div>
  );
};

export default TasksPage;
