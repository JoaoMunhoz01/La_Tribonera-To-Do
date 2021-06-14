import React from "react";
import Task from "../../Task";
import CardTask from "./CardTask";

interface Props {
  title: string;
  tasks: Task[];
}

const CalendarCard: React.FC<Props> = (props) => {
  return (
    <div className="container">
      <div className="purple-card">
        <div className="container-vertical">
          <h3>{props.title}</h3>

          {props.tasks.map((task) => (
            <CardTask key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarCard;
