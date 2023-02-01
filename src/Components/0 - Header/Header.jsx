import React, { useState } from 'react';
import Logo from "../../assets/teas.png";
import Styles from "./Header.module.css";

/* 
Dependiendo del estado: 
True ----> show_nav_menu, clicked_nav_burger
False ---> nav_menu, nav_burguer
*/

export const Header = () => {
    const [ toggle, showMenu ] = useState(false);

  return (
    <header className={Styles.header}>
        <nav className={Styles.nav}>
            <div className={Styles.nav_title}>
                <h2>TEAS RESTAURO</h2>
            </div>

            <div className={toggle ? Styles.nav_show_menu : Styles.nav_menu}>
                <ul className={Styles.nav_menu_items}>
                    <li><a href="#home" className={Styles.nav_menu_link}>Principal</a></li>
                    <li><a href="#services" className={Styles.nav_menu_link}>Servicios</a></li>
                    <li><a href="#team" className={Styles.nav_menu_link}>Equipo</a></li>
                    <li><a href="#contact" className={Styles.nav_menu_link}>Contacto</a></li>
                </ul>
            </div>

            <div className={Styles.nav_toggle} onClick={() => showMenu(!toggle)}>
                <div className={toggle ? Styles.clicked_nav_burger : Styles.nav_burguer}></div>
                <div className={toggle ? Styles.clicked_nav_burger : Styles.nav_burguer}></div>
                <div className={toggle ? Styles.clicked_nav_burger : Styles.nav_burguer}></div>
            </div>
        </nav>
    </header>
  )
}
