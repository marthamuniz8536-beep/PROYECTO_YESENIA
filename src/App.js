import SprintAvances from "./sprint/SprintAvances";
import SprintAvances25to29 from "./sprint/SprintAvances25to29";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>¡Hola Mundo!</h1>
        <SprintAvances/>
        <SprintAvances25to29/>
        <p>
          Proyecto Yesenia
        </p>
      </header>
    </div>
  );
}

export default App;
