import React from 'react';

import "./MobileNav.css"
import logo from '../../img/logo-mobile.png'


export function MobileNav({isOpen, toggleMenu}) {
  return (
   <div 
   className={`mobile-menu ${isOpen ? "active" : ""}`}
   onClick={toggleMenu}>

    <div className='mobile-menu-container'>
        <img src={logo} alt='logo'></img>
        <ul>

            <li>
                <a href='#top' className='menu-item'>Home</a>
            </li>

            <li>
                   <a href='#top' className='nav-items'>Skills</a>
            </li>

             <li>
                   <a href='#top' className='nav-items'>work</a>
             </li>

             <li>
                   <a href='#top' className='nav-items'>Contact Me</a>
             </li>

             <button className='contact-btn'>Here me</button>

        </ul>
    </div>
   </div>
  );
}