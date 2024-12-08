import React from "react";
import "./header.css";
import { format } from "date-fns"; // Importera date-fns

interface HeaderProps {
  toggleCreateTodo: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleCreateTodo }) => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "dd/MM");
  const dayOfWeek = format(currentDate, "EEEE");
  const year = currentDate.getFullYear();

  return (
    <div className="main-header">
      <div className="header-col-1">
        <h1> {year}</h1>
        <h1>{formattedDate}</h1>
        <h2>
          {dayOfWeek}
        </h2>
      </div>
      <div className="header-col-2">
        <button className="add-button" onClick={toggleCreateTodo}>
          +
        </button>
      </div>
    </div>
  );
};

export default Header;
