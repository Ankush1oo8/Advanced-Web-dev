import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import "./index.css"
import App from './App'
import Home from './components/Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import User from './User/User'
import Github, { githubInfoLoader } from './Github/Github'

// const router=createBrowserRouter([
//   {
//     path :'/',
//     element:<App/>,
//     children : [
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path=''element={<Home/>}/>
      <Route path='about'element={<About/>}/>
      <Route path='contact'element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
