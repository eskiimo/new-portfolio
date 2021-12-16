import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './Navlinks.css';

const NavLinks = (props) => {
 return (
  <div className="nav-links">
   <Nav vertical onClick={props.onClick}>
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
   </Nav>
  </div>
 );
};
export default NavLinks;
