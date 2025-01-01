import { useState } from "react"

function App() {
  const [color,setColor]=useState("olive");

  const changeRed =()=>{
    setColor("red")
  }
  return (
  
  <div className="w-full h-screen" style={{ backgroundColor:color }}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
      <div className="flex flex-wrap justify-center rounded-3xl gap-3 shadow-lg bg-white px-3 py-2">
        <button onClick={changeRed} className="outline-none bg-red-700 px-2 rounded-3xl">RED</button>
        <button onClick={()=>setColor("blue")} className="outline-none bg-blue-700 px-2 rounded-3xl">BLUE</button>
        <button onClick={()=>setColor("purple")} className="outline-none px-2  bg-purple-700 rounded-3xl">PURPLE</button>
        <button onClick={()=>setColor("green")} className="outline-none px-2  bg-green-700 rounded-3xl">GREEN</button>
        <button onClick={()=>setColor("#FFBF00")} className="outline-none px-2  bg-amber-400 rounded-3xl">AMBER</button>
        <button onClick={()=>setColor("yellow")} className="outline-none px-2  bg-yellow-700 rounded-3xl">YELLOW</button>
      </div>
    </div>
  </div>
  
  )
}

export default App
