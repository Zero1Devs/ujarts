import React from "react";
import {Link,NavLink} from 'react-router-dom';


const Navbar=()=>{
    return(
        <div id="menu">
            <h1 >
            <Link to="/" style={{color:"white"}}>UJ ARTS & CULTURE</Link>
            </h1>
            <nav className='nav'>
                <NavLink 
                    style={({isActive})=>{
                        return {
                            color: isActive ? "#ff4102" : "",
                        };
                    }} 
                    to="/events"
                >
                    Events
                </NavLink>
                
                <NavLink 
                    style={({isActive})=>{
                        return {
                            color: isActive ? "#ff4102" : "",
                        };
                    }} 
                    to="/venues"
                >
                    Venues
                </NavLink>
                
                <a href="https://movingcube.uj.ac.za/"> Moving Cube</a>
                <a href="https://artmuch.uj.ac.za/">Art Much?</a>
                <a href="https://futuresandbeyond.uj.ac.za/"> Conferences</a>
                <NavLink 
                    style={({isActive})=>{
                        return {
                            color: isActive ? "#ff4102" : "",
                        };
                    }} 
                    to="/about"
                >
                    About
                </NavLink>
            </nav>
        </div>
    )
  
}


export default Navbar;
