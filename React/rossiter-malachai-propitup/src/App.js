import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person name={"Yo momma"}
              initialAge={32}
              hairColor={"sorta brown"}/>
      <Person name={"timmies dad"}
              initialAge={345}
              hairColor={"hot pink"}/>
      <Person name={"Bob"}
              initialAge={16}
              hairColor={"dirty blond"}/>
    </div>
  );
}

export default App;
