import { useState } from "react";
import "./App.css";
function App() {
  let [counter, setCounter] = useState(5);
  function add() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  function removeValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }



  
  function clear() {
    setCounter((counter = 0));
  }
  return (
    <>
      <h1>Welcome React Js : {counter}</h1>
      <button onClick={add}>Add : {counter}</button> <br />
      <button onClick={removeValue}>Remove : {counter}</button> <br />
      <button onClick={clear}>Clear All</button>
    </>
  );
}

export default App;
