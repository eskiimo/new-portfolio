import React, { useState, useContext } from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Transition from '../UIelements/Transition';

import './NavigationBar.css';
import NavLinks from './Navlinks';
import NavFooter from './Navfooter';
import { HideContext } from '../util/context';

const NavigationBar = (props) => {
 const hide = useContext(HideContext);
 const [navIsOpen, setNavIsOpen] = useState(false);
 //  const [hidden, setHidden] = useState(false);

 //  const toggleNavBar = () => {
 //   setNavIsOpen((prev) => !prev);
 //  };
 const closeNavBar = () => {
  setNavIsOpen(false);
  hide.show();
 };

 const toggleNav = () => {
  if (navIsOpen) {
   closeNavBar();
  } else {
   openNavBar();
  }

  console.log('nav is open :' + navIsOpen);
  console.log('content is hidden:' + hide.hidden);
 };

 const openNavBar = () => {
  setNavIsOpen(true);
  hide.hide();
 };

 return (
  <React.Fragment>
   <button className="hamburger" onClick={toggleNav}>
    <i className="fas fa-bars fa-2x"></i>
   </button>
   {/* <div className={`"main-navbar" ${hide.hidden ? 'hide' : ''}`}> */}

   <div className={navIsOpen ? 'hide-main-navbar' : 'main-navbar'}>
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

   <Transition bool={navIsOpen}>
    <div className="wide">
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
   </Transition>
  </React.Fragment>
 );
};
export default NavigationBar;
