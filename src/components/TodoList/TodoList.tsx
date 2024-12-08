import React from "react";
import { FaMinusCircle } from "react-icons/fa"; // Importera minus-ikon
import "./todolist.css";

import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";

interface ListItem {
  id: number;
  text: string;
  completed: boolean;
  whereToDo: string;
  category: string;
}

interface TodoListProps {
  todos: ListItem[];
  setTodos: React.Dispatch<React.SetStateAction<ListItem[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  // Funktion för att hantera klick på en todo (markera som slutförd eller inte)
  const handleListClick = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Funktion för att ta bort en todo från listan
  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-wrapper">
      <ul className="todo-ul">
        {todos.map((todo) => (
          <li
            className="todo-container"
            key={todo.id}
            onClick={() => handleListClick(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "gray" : "black",
            }}
          >
            <div className="col-1">
              <h2 className="bottom-margin">{todo.text}</h2>
              <p>
                <strong>Category:</strong>
                {todo.category}
              </p>
              <p>
                <strong>Location:</strong>
                {todo.whereToDo}
              </p>
            </div>
            <div className="col-2">
              <p className="status-text">Status</p>
              {todo.completed ? (
                <RiCheckboxCircleLine className="true-icon" />
              ) : (
                <RiCheckboxBlankCircleLine className="false-icon" />
              )}
            </div>
            <div className="col-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveTodo(todo.id);
                }}
                className="remove-button"
              >
                <p className="status-text">Remove</p>
                <FaMinusCircle className="remove-icon" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
