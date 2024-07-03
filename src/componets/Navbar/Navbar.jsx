import React from 'react';
import { useState } from 'react';

import logo from '../../img/logo.png'
import menu from "../../img/menu-bar.png"

import "./Navbar.css"
import { MobileNav } from '../MobileNav/MobileNav';

export function Navbar() {

const [openMenu, setOpenMenu] = useState(false)

const toggleMenu = () =>{
   setOpenMenu(!openMenu);
}

  return (
   <>
   <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

    <nav className='navbar'>
        <div className='nav-content'>
            
            <img className='logo'src={logo} alt="logo" />
            <ul>
                <li>
                   <a href='https://docs.github.com/pt/rest/guides/using-the-rest-api-to-interact-with-checks?apiVersion=2022-11-28' className='nav-items'>Home</a>
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

                <button className='contact-btn'>Hire Me</button>
            </ul>

            <button className='menu-btn'  onClick={toggleMenu} >

                  <img className='menu-bar' src={menu} alt='barra-menu'>
                  
                  </img>
                  {openMenu ? "close" : "menu"}
            </button>


        </div>
    </nav>
    </>
  );
}