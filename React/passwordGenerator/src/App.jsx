import { useState, useCallback } from "react"


function App() {
  const [len,setLen]=useState(8);
  const [numAllowed,setNumAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("")


  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    for(let i=1;i<=len;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
      setPassword(pass)
    }

  },[len,numAllowed,charAllowed,setPassword])
  return (
    <>
      
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-4xl mb-2 text-center text-white">PASSWORD GENERATOR</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-7">
          <input type="text"
          value={password}
          className="outline-none rounded w-full m-2 py-1 px-3"
          placeholder="password" 
          readOnly/>
        </div>
      </div>
    </>
  )
}

export default App
