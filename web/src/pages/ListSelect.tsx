import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { TaskContext } from "../components/tasks/TaskContext";
import List from "../List";

const ListSelect: React.FC = () => {
  const [lists, setLists] = useState<List[]>([]);
  const { setTasks, currentList, setCurrentList } = useContext(TaskContext);

  useEffect(() => {
    axios.get("/api/listas").then(res => {
      setLists(res.data);
      setCurrentList(res.data[0]);
    });
  }, []);

  const loadTasks = () => {
    if (currentList) {
      axios.get("/api/listas/" + currentList.id + "/tarefas").then(res => {
        setTasks(res.data);
      });
    }
  };

  useEffect(loadTasks, [currentList]);

  return (
    <select
      id="list-select"
      onChange={e => setCurrentList(JSON.parse(e.target.value))}
    >
      {lists.map((list, index) => {
        return (
          <option key={index} value={JSON.stringify(list)}>
            {list.name}
          </option>
        );
      })}
    </select>
  );
};

export default ListSelect;
