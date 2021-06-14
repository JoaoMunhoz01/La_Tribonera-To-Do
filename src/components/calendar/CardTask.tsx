import React from "react";
import { useState } from "react";
import Task from "../../Task";

interface Props {
  task: Task;
}

const CardTask: React.FC<Props> = (props) => {
  const onChange = () => {
    let value = !checked;
    setChecked(value);
  };

  let [checked, setChecked] = useState(props.task.done);

  return (
    <div className="row">
      <input
        type="checkbox"
        className="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span>{props.task.name}</span>
    </div>
  );
};

export default CardTask;
