import './App.css'
import { useState, useEffect } from "react";
function App() {
    let [CounterVisble, setCounterVisble] = useState(true);
    useEffect(function () {
        setInterval(() => {
            setCounterVisble(c => !c)
        }, 6000);
    }, [])
    return(
        <div>
            {CounterVisble && <Counter></Counter>}
        </div>
    )
}
function Counter() {
    const[count, setCount] = useState(0);
    console.log("coutner");
    useEffect(function () {
        let clock = setInterval(() => {
            console.log("INSIDE");
            setCount(c => c + 1)
        }, 1000);
        console.log("mounted");
        return function () {
            console.log("Unmounted");
            clearInterval(clock)
        }
    }, [])
    return(
        <div>
            <h1 id='clock'>{count}</h1>
        </div>
    )
}
export default App
