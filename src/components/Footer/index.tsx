import React from 'react'
import { NavLink } from 'react-router-dom'
import { routeMain as routeMainPage } from 'pages/MainPage'

import './styles.scss'

const Footer = () => {
   return (
      <footer className='mainFooter'>
         <div className='footer-left'>
            <NavLink to={routeMainPage()} className='logo header__logo'>
               Новостник
            </NavLink>
            <p>Single Page Application</p>
         </div>
         <div className='footer-mid'>Дипломный проект 27.01.2023</div>
         <div className='footer-right'>
            <p>Made by</p>
            <div className='header__logo'>Рефат Абдукаримов</div>
         </div>
      </footer>
   )
}

export default Footer
