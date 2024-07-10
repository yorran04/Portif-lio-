import React from 'react';

import './ContactForm.css'

export function ContactForm() {
  return (
    <section className='form-container'>
        <form>
            <div className='name'>
                <input className='first-name' type='text' placeholder='Nome'></input>
                <input className='secund-name' type='text' placeholder='Sobrenome'></input>
            </div>
            <div className='mensagem'>
              <input className='email' type='text' placeholder='E-mail'></input>
              <textarea placeholder='Mensagem'></textarea>
            </div>
            <button>Enviar</button>
        </form>
    </section>
  );
}