import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Contador</h1>
      <p>{count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Disminuir</button>
    </div>
  );
}

export default App;
