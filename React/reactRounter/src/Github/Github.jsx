// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ankush1oo8')
    //     .then(res=>res.json())
    //     .then(data=>setData(data))

    // },[])
  return (
    <>
    <div className="flex justify-center items-center flex-col">
    <div className="text-center text-3xl bg-gray-700 text-white m-4 p-4">Github Followers : {data.followers}</div>
    <img src={data.avatar_url} className="" alt="Github Avatar" />
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader= async() =>{
    const res= await fetch('https://api.github.com/users/ankush1oo8')
    return res.json()
}