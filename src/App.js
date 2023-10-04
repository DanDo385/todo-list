import { useState } from 'react'; // import useState
import './App.css';

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(text) {
    setTodos([...todos, text])
  }

  function removeTodo(index) {
    // Checks whether the index matches the index of the item we want to remove
    // If it does, filter it out of the array

   setTodos(todos.filter((todo, i) => i !== index))

  }
  return (
  <div className="App">
    <h1>Todo List</h1>
    <form>
      
    </form>
      <input type="text" />
      <button type='submit' >Add Todo</button>
  </div>
  );
}


export default App;
