import { useState } from "react";
import { createContext } from "react";
import List from "../../List";
import Task from "../../Task";

interface ContextType {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  currentList: List | undefined;
  setCurrentList: (list: List) => void;
}

export const TaskContext = createContext<ContextType>({
  tasks: [],
  setTasks: () => {},
  currentList: undefined,
  setCurrentList: () => {},
});

export const TaskProvider: React.FC = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentList, setCurrentList] = useState<List | undefined>();

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        currentList,
        setCurrentList,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
