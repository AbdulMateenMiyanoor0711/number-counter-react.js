import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>NUMBER COUNTER</h1>
      <h1> {count} </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}> ADD </button>
        <button onClick={() => setCount((count) => count - 1)}>LESS</button>
        <button onClick={() => setCount((count) => (count = 0))}>RESET</button>
      </div>
    </>
  );
}

export default App;
