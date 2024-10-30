import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home/Home'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Posts from './Posts/Posts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/posts',
        loader: () => fetch('post.json'),
        element: <Posts></Posts>
      },
      {
        path: '/messages',
        element: <h1>Hello i am message</h1>
      },
      {
        path: '/notifications',
        element: <h1>Hello i am notifications</h1>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
