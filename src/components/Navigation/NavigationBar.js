import React, { useState } from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './NavigationBar.css';
import NavLinks from './Navlinks';
import NavFooter from './Navfooter';

const NavigationBar = (props) => {
 const [navIsOpen, setNavIsOpen] = useState(false);
 const toggleNavBar = () => {
  setNavIsOpen((prev) => !prev);
 };

 return (
  <React.Fragment>
   <button className="hamburger" onClick={toggleNavBar}>
    <i class="fas fa-bars fa-2x"></i>
   </button>
   <div className="main-navbar">
    <div className="logo">
     <NavItem onClick={toggleNavBar}>
      <NavLink to="/">
       <h1>K</h1>
      </NavLink>
     </NavItem>
    </div>
    <NavLinks isOpen={navIsOpen} onClick={toggleNavBar} />
    <NavFooter />
   </div>
   <CSSTransition
    in={navIsOpen}
    timeout={200}
    classNames={'slide-in-left'}
    mountOnEnter
    unmountOnExit
   >
    <div className="wide">
     <div className="logo">
      <NavItem onClick={toggleNavBar}>
       <NavLink to="/">
        <h1>K</h1>
       </NavLink>
      </NavItem>
     </div>
     <NavLinks isOpen={navIsOpen} onClick={toggleNavBar} />
     <NavFooter />
    </div>
   </CSSTransition>
  </React.Fragment>
 );
};
export default NavigationBar;
