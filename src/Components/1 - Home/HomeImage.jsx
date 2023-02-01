import React from 'react';
import { Parallax } from 'react-parallax';
import image from "../../assets/2.jpg";
import Styles from "./Home.module.css";

export const HomeImage = () => {
  return (
    <Parallax className={Styles.home_image} bgImage={image} strenth={800}>
      <div className={Styles.image_text_container}>
        <span className={Styles.img_text}>TEAS RESTAURACIÓN</span>
      </div>
    </Parallax>
  )
}
