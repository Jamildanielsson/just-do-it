import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import './todolist.css'

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
  const handleListClick = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <ul>
        {todos.map((todo) => (
          <li className="todo-container"
            key={todo.id}
            onClick={() => handleListClick(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <div className="col-1">
              <h2>{todo.text}</h2>
              <p><strong>Category:</strong>{todo.category}</p>
              <p><strong>Location:</strong>{todo.whereToDo}</p>
            </div>
            <div className="col-2">
              {todo.completed ? (
                <MdOutlineDone className="true-icon" />
              ) : (
                <CiCircleRemove className="false-icon" />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
