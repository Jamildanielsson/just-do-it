import React from 'react';
import './header.css';
import { format } from 'date-fns'; // Importera date-fns

interface HeaderProps {
  toggleCreateTodo: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleCreateTodo }) => {
  // Hämta dagens datum
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'yyyy-MM-dd'); // Formaterat som 2024-11-06
  const dayOfWeek = format(currentDate, 'EEEE'); // Får veckodagen, t.ex. "Wednesday"
  const year = currentDate.getFullYear(); // Hämtar året

  return (
    <div className="main-header">
      <div className="col-1">
        <h1>{formattedDate}</h1>
        <h2>{dayOfWeek} {year}</h2>
      </div>
      <div className="col-2">
        <button className="add-button" onClick={toggleCreateTodo}>+</button>
      </div>
    </div>
  );
};

export default Header;
