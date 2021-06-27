import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { TaskContext } from "../components/tasks/TaskContext";
import List from "../List";

const ListSelect = () => {
  const {currentList, setCurrentList} = useContext(TaskContext);
  const [lists, setLists] = useState<List[]>([]);


  const loadLists = () => {
    axios.get("/api/listas").then(res => {
      setLists(res.data);
      setCurrentList(lists[0]);
    });
  };

  useEffect(loadLists, []);

  return (
    <select id="list-select">
      {lists.map((list, index) => {
        return <option key={index}>{list.name}</option>
      })}
    </select>
  );
};

export default ListSelect;
