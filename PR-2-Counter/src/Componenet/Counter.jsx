import React, { useState } from "react";
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <div className="button-group">
        <button 
          onClick={() => count <= 0 ? alert("Counter is already 0") : setCount(count - 1)}
        >
          Decrement
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>

        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
