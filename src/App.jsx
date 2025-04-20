import { useRef } from "react"

const App = () => {
    const element = useRef(null);
    const elementFocus = () => {
        element.current.focus();
        element.current.value = "yellow";
    }
  return (
    <div>
        <input type="text" ref={element} />
        <button onClick={() => elementFocus()}>Focus</button>
    </div>
  )
}

export default App
