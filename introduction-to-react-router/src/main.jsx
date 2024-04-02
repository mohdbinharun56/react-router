import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello This is the the first react router application.</div>
  },
  {
    path: "/index",
    element: <div>This is the Landing Page of react router configure which are also called client side routing
      <br></br>
      <button>Sign In</button>
    </div>
  },
  {
    path: "/about",
    element: <div>About section</div>
  },
  {
    path: "contact",
    element: <div>Contact us to know about more details</div>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
