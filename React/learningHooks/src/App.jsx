
import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter]=useState(0)
  return (
   <>
   <div>
    <h1>hello world</h1>
    <h2>COUNTER VALUE : {counter}</h2>
  

   <button onClick={()=>setCounter(counter+1)}>Add value</button>
   <br />
   <br />
   <button onClick={()=>setCounter(counter-1)}>Sub value</button>
   </div>
   </>
  )
}

export default App
