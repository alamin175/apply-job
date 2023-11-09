import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='header'>
            <h1>ExploreCareer</h1>
            <div>
                <Link to="/statistics">Statistics</Link>
                <Link to="/applied">Applied Jobs</Link>
                <Link to="/blogs">Blogs</Link>
            </div>   
            <button>Start Applying</button> 
            </div>
            <Outlet></Outlet> 
        </div>
    );
};

export default Header;