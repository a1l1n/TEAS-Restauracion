import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsTriangle } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={Styles.footer_box}>
        <div className={Styles.footer_container}>
          <div className={Styles.footer_title}>
            <BsTriangle className={Styles.footer_title_icon}/>
            <h1>TEAS</h1>
            <h3>RESTAURACIÓN</h3>
          </div>
          
          <div className={Styles.footer_social}>
            <h3>Redes Sociales</h3>
            <a href="https://www.facebook.com/teas.restauracionconservacion" target="_blank"><AiFillFacebook className={Styles.social_icon}/> Facebook</a>
            <a href="https://www.instagram.com/teas.restauracion/" target="_blank"><AiFillInstagram className={Styles.social_icon}/> Instagram</a>
              <span><SiGmail className={Styles.social_icon}/>Gmail: teas.restauracion@gmail.com</span>
              <span></span>
          </div>

          <div className={Styles.footer_links}>
            <h3>Secciones</h3>
            <a href="#home">| Principal</a>
            <a href="#services">| Servicios</a>
            <a href="#team">| Integrantes</a>
          </div>

        </div>
          <p>© 2023 | TEAS, todos los derechos reservados</p>
    </footer>
  )
}
