import React from 'react';
import { Nav, NavLink } from 'reactstrap';
import App from '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const NavBar = (props) => {
  return(
    <Nav>
          <NavLink className="nav-text" href="/home">Home</NavLink>
          <NavLink className="nav-text" href="/profile">Profile</NavLink>
    </Nav>
  )
}

export default NavBar;