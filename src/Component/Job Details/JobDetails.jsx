import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobDetails.css'
const JobDetails = () => {
    const detailsCheck= useLoaderData()
    console.log(detailsCheck)
    return (
        <div className='simple-style'>
            <img src="/assets/images/bg1.png" alt="" />
            <h1>fine :{detailsCheck.length} </h1>
            <img src="/assets/images/bg2.png" alt="" />
        </div>
    );
};

export default JobDetails;