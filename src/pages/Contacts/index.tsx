import React, { useState } from 'react'

import routeMain from './routes'
import ContactsImage from 'assets/img/Contactsimg.jpg'


import './styles.scss'

const Contacts = () => {
  


   return (
      <section className='contactsPage'>
         <div className='contacts-info'>
            <div className='phone'>
               <a href='tel:+79991234576'>+7 (999) 123 45 76</a>
            </div>
            <div className='name'>
               Рефат <br /> Абдукаримов
            </div>
            <div className='mail'>
               <a href='mailto:mail@domain.com'>mail@domain.com</a>
            </div>
            <div className='position'>JavaScript разработчик</div>
            <div className='stack'>
               ES5, ES6, <span>React</span>
            </div>
         </div>

         <div className='contacts-image'>
            <img src={ContactsImage} alt='Contacts' />
         </div>
      </section>
   )
}

export { routeMain }

export default Contacts
