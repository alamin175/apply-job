import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Component/Header/Header.jsx';
import Statistics from './Component/Statistics/Statistics.jsx';
import Applied from './Component/AppliedJobs/Applied.jsx';
import Blogs from './Component/blogs/Blogs.jsx';
import HeadingSection from './Component/HeadingSection/HeadingSection.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Header></Header>,
    children:[
      {
        path:'/',
        element: <HeadingSection></HeadingSection>
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'applied',
        element: <Applied></Applied>
      },
      {
        path:'blogs',
        element: <Blogs></Blogs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
