import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './NavigationBar.css';

const NavigationBar = () => {
 return (
  <div className="main-navbar">
   <div className="logo">
    <NavItem>
     <NavLink to="/">
      <h1>K</h1>
     </NavLink>
    </NavItem>
   </div>
   <div className="nav-links">
    <Nav vertical>
     <NavItem>
      <NavLink to="/about">About</NavLink>
     </NavItem>

     <NavItem>
      <NavLink to="/skills">My Skills</NavLink>
     </NavItem>
     <NavItem>
      <NavLink to="/work">Work</NavLink>
     </NavItem>
     <NavItem>
      <NavLink to="/contact">Contact</NavLink>
     </NavItem>
     {/* <NavItem>
     <NavLink href="#">Disabled Link</NavLink>
    </NavItem> */}
    </Nav>
   </div>
  </div>
 );
};
export default NavigationBar;
