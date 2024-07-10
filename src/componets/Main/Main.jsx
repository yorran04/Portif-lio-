import React from 'react';

import './Main.css'


import logo from "../../img/logo_react.png";
import PhotoProfile from "../../img/profile03.jpeg";
import logoHtml from "../../img/img01.png"
import logoCSS from "../../img/img02.png"
import logoJs from "../../img/img03.png"




export function Main() {
  return (
    <>
    <section className='main-container'>
        <div className='main-content'>
            <h2>Yorran Alves</h2>
            <p style={{fontSize: '1.2rem', marginBottom: '15px'}}>________Front-end Developer</p>
            <p> Apaixonado por criar interfaces intuitivas e responsivas, com experiência em HTML, CSS, JavaScript e frameworks modernos. Transformo ideias em experiências digitais envolventes e funcionais."</p>
        </div>
        <div className='main-img'>
            <div>
                <div className='tech-icon'>
                    <img src={logo} alt='logo react'></img>
                </div>
                <div className='png'>
                    <img src={PhotoProfile} alt='foto perfil'></img>
                </div>
            </div>
            <div className='logos'>
            <div className='tech-icon'>
               <img src={logoHtml} alt='logo-html'></img> 
            </div>
            <div className='tech-icon'>
               <img src={logoCSS} alt='logo-css'></img> 
            </div>
            <div className='tech-icon'> 
               <img src={logoJs} alt='logo-js'></img> 
            </div>
            </div>
        </div>
    </section>
    </>
  );
}