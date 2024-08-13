import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [characterAllowed, setCharacter] = useState(false);
  const passRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*(){}[]?/]~`";
    for (var i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md shadow-md rounded-lg bg-gray-700 text-orange-500 mx-auto py-3 px-4 my-8">
        <h1 className="text-xl text-white text-center">Password Generator</h1>

        <div className="flex overflow-hidden rounded-lg shadow-md mb-4 mt-2">
          <input
            type="text"
            className="w-full px-3 py-1  outline-none"
            value={password}
            readOnly
            min={6}
            max={100}
            ref={passRef}
          />
          <button
            onClick={copyToClipboard}
            className="text-white bg-blue-700 px-4 py-0.5"
          >
            Copy
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <input
              type="range"
              className="flex gap-1"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="">Number</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
