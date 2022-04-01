import "./App.css";
import logo from "./assets/images/logo.svg";
import logo3 from "/images/logo3.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="/images/logo2.svg" className="App-logo" alt="logo" />
        <img src={logo3} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
      </header>
    </div>
  );
}

export default App;
