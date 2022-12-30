import './App.css';
import StarWarsForm from './components/StarWarsForm';
import People from './components/People';
import Planets from './components/Planets';

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <StarWarsForm />
        <Routes>
          <Route path="/people/:id" element={<People/>}/>
          <Route path="/planets/:id" element={<Planets/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
