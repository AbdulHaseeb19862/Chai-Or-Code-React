import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  function addValue() {
    // it's not making batches here if you write function like this and it will increment 4 and 4;
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }
  // function addValue() { // if you write like it will make batches from it's
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  // }

  function removeValue() {
    setCounter(counter + 1);
  }

  return (
    <>
      <button onClick={addValue}>Add {counter}</button>
      <button onClick={removeValue}>Remove {counter}</button>
    </>
  );
}

export default App;
