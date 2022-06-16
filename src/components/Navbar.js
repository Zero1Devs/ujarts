import React from "react";
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
        <div id="menu">
            <h1 >
            <Link to="/" style={{color:"white"}}>UJ ARTS & CULTURE</Link>
            </h1>
            <nav className='nav'>
            <Link to="/events">Events</Link>
            <Link to="/venues">Venues</Link> 
            <Link to="/about">About</Link>
            </nav>
        </div>
    )
}
export default Navbar;