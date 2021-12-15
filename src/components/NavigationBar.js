import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './NavigationBar.css';

const NavigationBar = () => {
 return (
  <div className="main-navbar">
   <div className="logo">
    <h1>K</h1>
   </div>
   <div className="nav-links">
    <Nav vertical>
     <NavItem>
      <NavLink to="/">HOME</NavLink>
     </NavItem>

     <NavItem>
      <NavLink to="/about">ABOUT</NavLink>
     </NavItem>

     <NavItem>
      <NavLink to="/contact">CONTACT</NavLink>
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
