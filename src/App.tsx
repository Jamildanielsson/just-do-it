import React, { useState } from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import CreateTodo from './components/CreateTodo/CreateTodo';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Get out of bed', completed: false, whereToDo: 'Home', category: 'Business' },
    { id: 2, text: 'Take a shower', completed: false, whereToDo: 'Home', category: 'Pleasure' }
  ]);
  
  const [showCreateTodo, setShowCreateTodo] = useState(false);

  // Hantera visning/döljning av overlayn
  const toggleCreateTodo = () => {
    setShowCreateTodo(!showCreateTodo);
  };

  // Funktion för att lägga till en ny todo
  const addTodo = (newTodo: { text: string, whereToDo: string, category: string }) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: newTodo.text, completed: false, whereToDo: newTodo.whereToDo, category: newTodo.category }
    ]);
    setShowCreateTodo(false); // Stänger overlayn efter att ha lagt till en todo
  };

  // Funktion för att stänga overlayn utan att lägga till en todo
  const closeOverlay = () => {
    setShowCreateTodo(false);
  };

  return (
    <div className='wrapper'>
      <div className='main-container'>
        <Header toggleCreateTodo={toggleCreateTodo} />
        <h1 className='create-your-todo'>Today:</h1>
        <TodoList todos={todos} setTodos={setTodos} />
        {showCreateTodo && <CreateTodo addTodo={addTodo} closeOverlay={closeOverlay} />}
      </div>
    </div>
  );
};

export default App;
