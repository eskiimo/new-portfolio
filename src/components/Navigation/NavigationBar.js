import React, { useState } from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Transition from '../UIelements/Transition';

import './NavigationBar.css';
import NavLinks from './Navlinks';
import NavFooter from './Navfooter';

const NavigationBar = (props) => {
 const [navIsOpen, setNavIsOpen] = useState(false);
 const toggleNavBar = () => {
  setNavIsOpen((prev) => !prev);
 };
 const closeNavBar = () => {
  setNavIsOpen(false);
 };

 return (
  <React.Fragment>
   <button className="hamburger" onClick={toggleNavBar}>
    <i className="fas fa-bars fa-2x"></i>
   </button>
   <div className="main-navbar">
    <div className="logo">
     <NavItem onClick={closeNavBar}>
      <NavLink to="/">
       <h1>K</h1>
      </NavLink>
     </NavItem>
    </div>
    <NavLinks isOpen={navIsOpen} onClick={closeNavBar} />
    <NavFooter />
   </div>
   {/* <CSSTransition
    in={navIsOpen}
    timeout={200}
    classNames={'slide-in-left'}
    mountOnEnter
    unmountOnExit
   > */}

   <Transition bool={navIsOpen}>
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
   </Transition>
  </React.Fragment>
 );
};
export default NavigationBar;
