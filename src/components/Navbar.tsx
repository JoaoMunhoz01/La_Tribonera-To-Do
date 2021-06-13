import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <div className="left">
          <li className="nav-item">
            <a href="index.html">Home</a>
          </li>
        </div>

        <div className="right">
          <li className="nav-item">
            <a href="tarefas.html">Tarefas</a>
          </li>
          <li className="nav-item">
            <a href="listas.html">Listas</a>
          </li>
          <li className="nav-item">
            <a href="calendario.html">Calendário</a>
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
