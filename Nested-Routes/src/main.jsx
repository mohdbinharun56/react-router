import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/about.jsx'
import Contact from './components/Contact/contact.jsx'
import Users from './components/Users/Users.jsx'
import UserDetails from './components/UserDetails/UserDetails.jsx'
import Posts from './components/Posts/Posts.jsx'
import PostDetails from './components/PostDetails/PostDetails.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: ()=>fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      },
      {
        path: '/user/:userid',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: ()=>fetch(`https://jsonplaceholder.typicode.com/posts`),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postid',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),
        element: <PostDetails></PostDetails>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
