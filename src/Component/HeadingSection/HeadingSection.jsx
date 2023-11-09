import React from 'react';
import './container.css'
const HeadingSection = () => {
    return (
        <div className='container'>
            <div className='job-details'>
                <h1>One Step Closer TO Your <span>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button>Get Started</button>            
            </div>
            <img src="/assets/images/user.png" alt="" />
        </div>
    );
};

export default HeadingSection;