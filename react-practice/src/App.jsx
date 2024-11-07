import './App.css'
import { useState, useEffect } from "react";

//relearing clean up , useEffect learning about dependency array
function App() {
    const[count, setCount] = useState(0);
    const[count2, setCount2] = useState(0);
    function increase() {
        setCount(c => c+1);
    }
    function decrease() {
        setCount2(c => c-1);
    }
    return(
        <div>
            <Counter count={count} count2={count2}/>
            <button onClick={increase}>Increase count</button>
            <button onClick={decrease}>Decrease count</button>
        </div>
    )
}

function Counter(props) {

    useEffect(function() {
        console.log("Mouted");
        return function () {
            console.log("Unmounted");
        }
    }, []) // this runs on  every cycle 

    useEffect(function(){
        console.log("count increase")
    },[props.count]);  // only logs when the this state changes
    useEffect(function(){
        console.log("count decrease");
    }, [props.count2]);
    return(
        <div>
                Counter1 {props.count} <br />
                Counter2 {props.count2} <br />
        </div>
    )
}

export default App
