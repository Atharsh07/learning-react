import './App.css'
import { useState, useEffect } from "react";
function App() {
    return(
        <div>
            <Counter></Counter>
        </div>
    )
}
function Counter() {
    const[count, setCount] = useState(0);
    console.log("coutner");
    useEffect(function () {
        setInterval(() => {
            setCount(function (params) {
                return params + 1;
            })
        }, 1000);
        console.log("mounted");
        
    }, [])
    return(
        <div>
            <h1 id='clock'>{count}</h1>
        </div>
    )
}
export default App
