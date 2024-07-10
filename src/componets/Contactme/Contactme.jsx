import React from 'react';

import './Contactme.css'
import { ContactCard } from './ContactCard/ContactCard';
import { ContactForm } from './ContactForm/ContactForm';
import email from './../../img/o-email.png';
import gitLog from './../../img/github.png';


export function Contactme() {
  return (
 <section className='contact-container'>
    <h5>Contact Me</h5>

    <div className='contact-content'>

        <div style={{flex: 1}}>
            <ContactCard text="yorran_alves04@hotmail" icon={email}></ContactCard>
            <ContactCard text="github.com/yorran04" icon={gitLog} ></ContactCard>

        </div>
        <div style={{flex: 1}}>
            <ContactForm></ContactForm>
        </div>

    </div>
    

 </section>
  );
}