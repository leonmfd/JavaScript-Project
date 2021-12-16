import './App.css';
import { useState } from "react";

function App() {
  const [state, setState] = useState(0);

  function handleButtonUp() {
    console.log("The counter was increased.");
    setState(state + 1);
  }

  function handleButtonDown() {
    console.log("The counter was decreased.");
    setState(state - 1);
  }

  function handleButtonReset() {
    console.log("The counter was reset to 0.");
    setState(0);
  }

  return (
    <div className="App">
      <h1>Push the button</h1>
      <p> counter:{state}</p>
      <button
        style={{
          fontSize: 33,
          backgroundColor: "green"
        }}
        onClick={handleButtonUp}
      >
        Up
      </button>
      <button
        style={{
          fontSize: 33,
          backgroundColor: "red"
        }}
        onClick={handleButtonDown}
      >
        Down
      </button>
      <button
        style={{
          fontSize: 33,
          backgroundColor: "yellow"
        }}
        onClick={handleButtonReset}
      >
        Reset
      </button>
    </div>
  );
}



export default App;
