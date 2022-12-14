import './App.css';
import React, {useState} from 'react';
import ColorForm from './components/ColorForm';
import ColorDisplay from './components/ColorDisplay';

function App() {

  const[boxColorArray, setBoxColorArray] = useState([]);

  return (
    <div className="App">
      <ColorForm boxColorArray={boxColorArray} setBoxColorArray={setBoxColorArray}/>
      <ColorDisplay boxColorArray={ boxColorArray }/>
    </div>
  );
}

export default App;
