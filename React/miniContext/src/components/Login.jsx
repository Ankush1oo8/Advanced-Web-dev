import {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword]= useState('')

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username, password});
    }
  return (
    <div style={{width:'100vh', height:'100%'}}>
    <div style={{display:"flex", justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <h2>LOGIN</h2>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username' />
        <br />
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='password' />
        <button onClick={handleSubmit}>Login</button>
    </div>
    </div>
  )
}

export default Login