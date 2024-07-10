import React from 'react';

import './ContactCard.css'
export function ContactCard({text, icon}) {
  return (
   <div className='contact-details-card'>
    <div className='icon'>
    <img className='email-img' src={icon} alt={text} />
    </div>
    <p>{text}</p>
   </div>
    
  );
}