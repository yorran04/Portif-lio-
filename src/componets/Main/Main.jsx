import React from 'react';

import './Main.css'


import logo from "../../img/logo_react.png";
import PhotoProfile from "../../img/profile.png";
import logoHtml from "../../img/img01.png"
import logoCSS from "../../img/img02.png"
import logoJs from "../../img/img03.png"





export function Main() {
  return (
    <>
    <section className='main-container'>
        <div className='main-content'>
            <h2>Buildin your portfolio</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptates impedit iure cupiditate blanditiis quia, ex adipisci sit quis aliquid itaque cumque quod provident iusto quam? Neque doloribus quae fuga!
            </p>
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