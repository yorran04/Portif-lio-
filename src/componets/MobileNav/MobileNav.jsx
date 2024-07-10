import React from 'react';

import "./MobileNav.css"


export function MobileNav({isOpen, toggleMenu}) {
  return (
   <div 
   className={`mobile-menu ${isOpen ? "active" : ""}`}
   onClick={toggleMenu}>

    <div className='mobile-menu-container'>
        <ul>

            <li>
                <a href='#top' className='menu-item'>Home</a>
            </li>

            <li>
                   <a href='#top' className='nav-items'>Habilidades</a>
            </li>

             <li>
                   <a href='#top' className='nav-items'>Experiências</a>
             </li>  

             <li>
                   <a href='#top' className='nav-items'>Contato</a>
             </li>

             <button className='contact-btn'>Here me</button>

        </ul>
    </div>
   </div>
  );
}