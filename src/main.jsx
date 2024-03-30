import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import {RouterProvider, createBrowserRouter } from "react-router-dom"
import CreatePost, { createPostAction } from './components/CreatePost.jsx'
import PostList, { postloader } from './components/PostList.jsx'



const router =createBrowserRouter([
  
  {
    path: "/",
    element: <App/>,
    children:[
      {
      path: "/",
      element:<PostList/>,
      loader: postloader,
    
    },{
      path: "/create-post",
      element: <CreatePost/>,
      action: createPostAction
    }

    ]
  }
  
  
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>,
)
