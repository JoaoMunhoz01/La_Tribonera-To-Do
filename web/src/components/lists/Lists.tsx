import React from "react";
import List from "../../List";
import ListCard from "./ListCard";

interface Props {
  lists: List[];
  onRemoveList: (id: string) => void;
}

const Lists: React.FC<Props> = props => {
  return (
    <ul>
      {props.lists.map((list, index) => (
        <ListCard
          key={index}
          list={list}
          onRemoveList={() => props.onRemoveList(list.id)}
        />
      ))}
      ;
    </ul>
  );
};

export default Lists;
