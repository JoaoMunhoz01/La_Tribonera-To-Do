import CalendarCard from "../components/calendar/CalendarCard";
import Navbar from "../components/Navbar";
import Task from "../Task";

const tarefas_hoje = [
  new Task("Tarefa 1"),
  new Task("Tarefa 2"),
  new Task("Tarefa 3"),
];

const tarefas_amanha = [
  new Task("Tarefa 4"),
  new Task("Tarefa 5"),
  new Task("Tarefa 6"),
];
const tarefas_semana = [
  new Task("Tarefa 7"),
  new Task("Tarefa 8"),
  new Task("Tarefa 9")
];
const CalendarPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container-vertical align-center">
        <h1 className="title">Calendário</h1>

        <button className="white-button">
          <a href="tarefas.html">Nova tarefa</a>
        </button>

        <div className="container">
          <CalendarCard title="Hoje" tasks={tarefas_hoje}/>
          <CalendarCard title="Amanhã" tasks={tarefas_amanha}/>
          <CalendarCard title="Esta semana" tasks={tarefas_semana}/>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
