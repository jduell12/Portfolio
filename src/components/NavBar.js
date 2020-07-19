import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/Resume">Resume</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    )
}

export default NavBar;