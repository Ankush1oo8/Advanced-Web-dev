import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [len, setLen] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //useRef hook
  const passwordRef=useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      setPassword(pass);
    }
  }, [len, numAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [len, numAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-700">
        <h1 className="text-4xl mb-2 text-center text-white">
          PASSWORD GENERATOR
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-7">
          <input
            type="text"
            value={password}
            className="outline-none rounded w-full m-2 py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPassword} className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0">
            COPY
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={len}
              className="cursor-pointer"
              onChange={(e) => {
                setLen(e.target.value);
              }}
            />
            <label>Length: {len}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
