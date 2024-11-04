import './App.css'
import { useState } from "react";
function App() {
  return (
    <div>
        <b>
        this is an counter
        </b>
        <Counter></Counter>
    </div>
  )
}
function Counter(params) {
    const [count, setCount] = useState(0);
    function increaseCounter() {
        setCount(count + 1);
    }
    function decreaseCounter() {
        setCount(count - 1);
    }
    function resetCounter() {
        setCount(count - count);
    }
    return(
        <div>
            <h1 id='num'>{count}</h1>
            <button onClick={increaseCounter}>Increase Counter</button>
            <button onClick={decreaseCounter}>Decrase Counter</button>
            <button onClick={resetCounter}>Reset Counter</button>
        </div>
    )
}

export default App
