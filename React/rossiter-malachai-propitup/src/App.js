import logo from './logo.svg';
import './App.css';
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person name={"Yo momma"}
              age={32}
              hairColor={"sorta brown"}/>
      <Person name={"timmies dad"}
              age={345}
              hairColor={"hot pink"}/>
      <Person name={"Marissa"}
              age={16}
              hairColor={"dirty blond"}/>
    </div>
  );
}

export default App;
