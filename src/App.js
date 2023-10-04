import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    setTodos([...todos, text]);
  }

  function removeTodo(index) {
    setTodos(todos.filter((todo, i) => i !== index));
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(event.target.elements.todo.value);
          event.target.elements.todo.value = '';
        }}
      >
        {/* Input field for adding todos */}
        <input type='text' name='todo' />
        <button type='submit'>Add Todo</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

