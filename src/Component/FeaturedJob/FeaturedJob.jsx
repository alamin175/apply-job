import React from 'react';
import './featuredJob.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import JobDetails from '../Job Details/JobDetails';
const FeaturedJob = ({feature}) => {
    const {id, name, companyName, jobPostName, jobTime, logo, salary, jobTime2, location} = feature
    return (
        <div className='featured-job'>
            <img src={logo} alt="" />
           <h3>{jobPostName} </h3>
           <p>{companyName} </p>
            <div className='job-time'>
                <p>{jobTime} </p>
                <p>{jobTime2} </p>
            </div>
            <div className='location'>
            <p><FontAwesomeIcon icon={faLocationDot} /> {location} </p>
            <p> <FontAwesomeIcon icon={faDollar}/>  Salary: {salary} </p>
            </div>
           <Link to={`/job/${id}`}> <button>View Details</button></Link>
        </div>
    );
};

export default FeaturedJob;