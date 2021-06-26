import axios from "axios";
import React, { useContext } from "react";
import ListCard from "./ListCard";
import { ListContext } from "./ListContext";

const Lists: React.FC = () => {
  const {lists, setLists} = useContext(ListContext);

  const removeList = (index: number) => {
    let id = lists[index].id;

    let newLists = [...lists];
    newLists.splice(index, 1);
    setLists(newLists);

    axios.delete("/api/lists/" + id);
  };

  return (
    <ul>
      {lists.map((list, index) => (
        <ListCard
          key={index}
          list={list}
          onRemoveList={() => {removeList(index)}}
        />
      ))}
      ;
    </ul>
  );
};

export default Lists;
