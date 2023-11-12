import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import JobLoading from '../JobLoading/JobLoading';
import './container.css'
const FullSection = ({featuredJob}) => {
    return (
        <div>

        <div className='container'>
            <div className='job-details'>
                <h1>One Step Closer TO Your <span>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button>Get Started</button>            
            </div>
            <img src="/assets/images/user.png" alt="" />
        </div>
{/*----------------
Job Category List 
-------------------*/}
        <div className='job-category'>
            <div className='job-headline'>
                <h1>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your Future</p>
            </div>
            <div className='flex-container'>

                <div className='category'>
                    <div className='category-list'>
                        <img src="/assets/icons/accounts.png" alt="" />
                        <h4>Account & Finance</h4>
                        <p>300+ Jobs Available</p>
                    </div>
                </div>
                <div className='category'>
                    <div className='category-list'>
                        <img src="/assets/icons/creative.png" alt="" />
                        <h4>Creative Design</h4>
                        <p>100+ Jobs Available</p>
                    </div>
                </div>                
                <div className='category'>
                    <div className='category-list'>
                        <img src="/assets/icons/marketing.png" alt="" />
                        <h4>Marketing & Sales</h4>
                        <p>150+ Jobs Available</p>
                    </div>
                </div>                
                <div className='category'>
                    <div className='category-list'>
                        <img src="/assets/icons/chip.png" alt="" />
                        <h4>Engineering Job</h4>
                        <p>200+ Jobs Available</p>
                    </div>
                </div>
            </div>
        </div>
        
{
/*---------------
Feautured Job
-----------------*/
}
            <div>
                <div className='job-headline'> 
                <h1>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
            </div>

{
/*--------------------
Featured job Details
----------------------*/
}
            <div className='job-container'>
                <JobLoading></JobLoading>
            </div>
        </div>
    );
};

export default FullSection;