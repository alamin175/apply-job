import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import JobDetails from '../Job Details/JobDetails';
import './jobLoading.css'
const JobLoading = () => {
    const job = useLoaderData()
    return (
        <div className='grid'>
            {
                job.map(feature => <FeaturedJob key={feature.id} feature={feature} ></FeaturedJob>)
                
            }
            <button className='see'>See All Jobs</button>
        </div>
    );
};

export default JobLoading;