import React from 'react';
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import Styles from "./Home.module.css";


export const Social = () => {
  return (
    <div className={Styles.social_bar}>
        <a href="https://www.facebook.com/teas.restauracionconservacion" target="_blank"><AiFillFacebook className={Styles.social_icon_facebook}/></a>
        <a href="https://www.instagram.com/teas.restauracion/" target="_blank"><AiFillInstagram className={Styles.social_icon_instagram}/></a>
        <a href="#contact" target="_blank"><SiGmail className={Styles.social_icon_gmail}/></a>
    </div>
  )
}
