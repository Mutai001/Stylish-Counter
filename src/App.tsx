import React, { useState, useRef } from 'react';
import './App.scss'

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="app">
      <div className="counter-container">
        <h1>Stylish Counter</h1>
        <div className="counter-display">
          <input
            ref={inputRef}
            type="text"
            readOnly
            value={count}
            className="counter-input"
          />
        </div>
        <div className="counter-controls">
          <button onClick={increment} className="counter-button">Increment</button>
          <button onClick={decrement} className="counter-button">Decrement</button>
          <button onClick={reset} className="counter-button">Reset</button>
        </div>
        <button onClick={focusInput} className="focus-button">Focus Input</button>
      </div>
    </div>
  );
}

export default App;
