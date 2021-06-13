import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <div className="left">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
        </div>

        <div className="right">
          <li className="nav-item">
            <Link to="/tarefas">Tarefas</Link>
          </li>
          <li className="nav-item">
            <Link to="/listas">Listas</Link>
          </li>
          <li className="nav-item">
            <Link to="/calendario">Calendário</Link>
          </li>
          <li className="nav-item">
            <Link to="/login">Sair</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
