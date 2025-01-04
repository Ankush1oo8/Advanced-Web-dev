import { useParams } from "react-router-dom"

function User() {
    const {id} =useParams()
  return (
    <div className="text-center bg-black text-white text-xl m-8 p-8">User :{id} </div>
  )
}

export default User