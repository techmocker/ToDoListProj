import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false, important: false }]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const toggleImportant = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].important = !updatedTodos[index].important;
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>ToDo-Liste</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Neue Aufgabe hinzufügen"
      />
      <button onClick={addTodo}>Hinzufügen</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(index)}>Entfernen</button>
            <button onClick={() => toggleComplete(index)}>
              {todo.completed ? 'Rückgängig' : 'Erledigt'}
            </button>
            <button onClick={() => toggleImportant(index)}>
              {todo.important ? 'Unwichtig' : 'Wichtig'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
