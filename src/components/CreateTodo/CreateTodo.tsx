import React, { useState } from 'react';
import './createtodo.css'

interface CreateTodoProps {
  addTodo: (newTodo: { text: string, whereToDo: string, category: string }) => void;
  closeOverlay: () => void;  // Lägg till en funktion för att stänga overlayn
}

const CreateTodo: React.FC<CreateTodoProps> = ({ addTodo, closeOverlay }) => {
  const [newTodoText, setNewTodoText] = useState('');
  const [newWhereToDo, setNewWhereToDo] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "text") {
      setNewTodoText(value);
    } else if (name === "whereToDo") {
      setNewWhereToDo(value);
    } else if (name === "category") {
      setNewCategory(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoText.trim() && newWhereToDo.trim() && newCategory.trim()) {
      // Skicka hela objektet med text, plats och kategori
      addTodo({
        text: newTodoText,
        whereToDo: newWhereToDo,
        category: newCategory,
      });
      // Återställ inputfältet efter submit
      setNewTodoText('');
      setNewWhereToDo('');
      setNewCategory('');
    }
  };

  return (
    <div className="overlay">
      <button className="close-btn" onClick={closeOverlay}>X</button>
      <div className="overlay-content">
        <h3>Add New Todo</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="text"
              placeholder="What to do"
              value={newTodoText}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="whereToDo"
              placeholder="Where to do it"
              value={newWhereToDo}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="category"
              placeholder="Category (e.g., Business or Pleasure)"
              value={newCategory}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-row">
            <button type="submit">Add Todo</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
