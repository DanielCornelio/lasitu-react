import React from 'react';
import {NavLink } from 'react-router-dom'
import '../assets/styles/Navbar.css'
import logo from '../assets/img/lasitud_blanco.png'

const Navbar = () => {
    return (  
        <nav>
            <div className="nav__container">
                <img src={logo} className="nav__logo" alt="logo"/>
                <ul className="nav__item">
                    <li><NavLink to="/" activeClassName="selected">Inicio</NavLink></li>
                    <li><NavLink to="/conciertos" activeClassName="selected">Conciertos</NavLink></li>
                    <li><NavLink to="/musica" activeClassName="selected">Música</NavLink></li>
                    <li><NavLink to="/conocenos" activeClassName="selected">Conocenos</NavLink></li>
                    <li><NavLink to="/contacto" activeClassName="selected">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;