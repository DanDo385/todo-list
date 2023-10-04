import { useState } from 'react'; // import useState
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
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
