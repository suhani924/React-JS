import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increase() {setCount(count + 1);}

  function decrease() {
    if (count > 0) {setCount(count - 1);}
  }

  function reset() {setCount(0);}

  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <div className="buttons">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;