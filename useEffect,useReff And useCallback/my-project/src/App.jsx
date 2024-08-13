import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [allowedNumber, setNumber] = useState(false);
  const [allowedCharacter, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);
  const passwordGererator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowedNumber) str += "0123456789";
    if (allowedCharacter) str += "!@#$%^&*()?/|~<>";
    for (var i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, allowedNumber, allowedCharacter, setPassword]);

  const copyPasswordToClipborad = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGererator();
  }, [length, allowedNumber, allowedCharacter, passwordGererator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md text-orange-400 bg-gray-700 rounded-lg px-4 py-3 my-8">
        <h1 className="text-xl text-center text-white">Password Generator</h1>
        <div className="flex   overflow-hidden shadow rounded-lg mb-4 mt-2">
          <input
            type="text"
            value={password}
            className="w-full px-3 py-1  outline-none  "
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button
            className="bg-blue-700 outline-none text-white px-4 py-0.5 shrink-0"
            onClick={copyPasswordToClipborad}
          >
            Copy
          </button>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="">Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              defaultChecked={allowedNumber}
              id=""
              type="checkbox"
              
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              defaultChecked={allowedCharacter}
              id=""
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
