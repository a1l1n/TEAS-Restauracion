import React, { useState } from 'react';
import Logo from "../../assets/teas.png";
import Styles from "./Header.module.css";

/* 
1) Logo
2) TEAS RESTAURO
3)

Principal -------> Home / Galería
Servicios -------> Qué ofrecemos
                   Quiénes somos
                   Misión, visión, valores
Equipo ----------> 4 cards
Contacto --------> Mail, formulario de contacto
*/

export const Header = () => {
    const [ toggle, showMenu ] = useState(false);

  return (
    <header className={Styles.header}>
        <nav className={Styles.nav}>
            <div className={Styles.nav_title}>
                <img src={Logo} alt="Teas_Logo" className={Styles.nav_logo}/>
                <h2>TEAS RESTAURO</h2>
            </div>

            <div className={Styles.nav_menu}>
                <ul className={Styles.nav_menu_items}>

                    <li className={Styles.nav_menu_link}>
                        <a href="#home">Principal</a>
                    </li>

                    <li className={Styles.nav_menu_link}>
                        <a href="#services">Servicios</a>
                    </li>

                    <li className={Styles.nav_menu_link}>
                        <a href="#team">Equipo</a>
                    </li>

                    <li className={Styles.nav_menu_link}>
                        <a href="#contact">Contacto</a>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
  )
}
