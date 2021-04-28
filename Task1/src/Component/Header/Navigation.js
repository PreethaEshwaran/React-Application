import React from 'react';
import './Navigation.css';
 
import {NavLink} from 'react-router-dom';

const Link = {
    width: "100px",
    padding: "6px 12px",
    margin: "0 9px 9px",
    background: "green",
    textDecoration: "none",
    color: "white",
}

const Navbar = () => {
    return (
        <div className="Navbar">
        <NavLink to="/home" exact style={Link} activeStyle={{background: "darkgreen"}}>Home</NavLink>

            <NavLink to="/about" exact style={Link} activeStyle={{background: "darkgreen"}}>About</NavLink>

            <NavLink to="/contact" exact style={Link} activeStyle={{background: "darkgreen"}}>Contact</NavLink>

        </div>
    )
}

export default Navbar;
