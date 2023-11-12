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
import FullSection from './Component/FullSection/FullSection.jsx';
import JobCategory from './Component/job category/JobCategory.jsx';
import job from './Loader/loader.js';
import FeaturedJob from './Component/FeaturedJob/FeaturedJob.jsx';
import JobDetails from './Component/Job Details/JobDetails.jsx';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Header></Header>,
    children:[
      {
        path:'/',
        element:<FullSection/>,
        loader: job
      },
      {
        path:'/',
        element:<JobCategory></JobCategory>
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
      },
      {
        path:'feature',
        element:<FeaturedJob></FeaturedJob>
      },
      {
        path: 'job/:jobid',
        element: <JobDetails></JobDetails>,
        // loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.jobid}`)
        loader: ({params}) => fetch(`job.json/${params.jobid}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
