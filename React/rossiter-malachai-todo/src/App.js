import './App.css';
import React, {useState} from 'react';
import ListForm from './components/ListForm';
import ListDisplay from './components/ListDisplay';

function App() {

  const[todoListArray, setTodoListArray] = useState([]);

  return (
    <div className="App">
      <ListForm todoListArray={todoListArray} setTodoListArray={setTodoListArray}/>
      <ListDisplay todoListArray={todoListArray} setTodoListArray={setTodoListArray}/>
    </div>
  );
}

export default App;
