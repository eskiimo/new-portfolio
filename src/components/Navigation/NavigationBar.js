import React from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './NavigationBar.css';
import NavLinks from './Navlinks';
import NavFooter from './Navfooter';

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
   <NavLinks />
   <NavFooter />
  </div>
 );
};
export default NavigationBar;
