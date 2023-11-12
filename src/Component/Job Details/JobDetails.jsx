import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './JobDetails.css'
const JobDetails = () => {
    const detailsCheck= useLoaderData()
    console.log(detailsCheck)
    return (
        <div>
            <h1>fine :{detailsCheck.length} </h1>
        </div>
    );
};

export default JobDetails;