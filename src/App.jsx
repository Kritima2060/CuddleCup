import { useState } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Body from './components/body'
import Layout from './components/layout'
import About from './components/pages/AboutUs'
const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        index:true,
        element: <Body/>
      },
      {
        path:"/about",
        element: <About/>
      },
       {
        path:"/menu",
        element: <Body description="This is Menu Page."/>
      },
       {
        path:"/contact",
        element: <Body description="This is Contact Page."/>
      },
       {
        path:"/location",
        element: <Body description="This is Location Page."/>
      }
    ]
  },
 
])

function App() {
  

  return (
    <>
     <RouterProvider router={router}/>
      
    </>
  )
}

export default App
