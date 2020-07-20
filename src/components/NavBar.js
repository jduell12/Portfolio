import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

//contexts
import {NavBarContext} from '../contexts/NavBarContext'

const NavBar = () => {

   const {onPage, setPage} = useContext(NavBarContext);
    return (
        <nav>
            <Link onClick={() => {setPage('home')}} className={onPage === 'home' ? 'on' : ''} to="/">Home</Link> 
            <Link onClick={() => {setPage('portfolio')}} className={onPage === 'portfolio' ? 'on' : ''} to="/Portfolio">Portfolio</Link> 
            <Link onClick={() => {setPage('contact')}}  className={onPage === 'contact' ? 'on' : ''} to="/Contact">Contact</Link>
        </nav>
    )
}

export default NavBar;