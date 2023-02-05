import React from 'react';
import { Parallax } from 'react-parallax';
import image from "../../assets/0.jpg";
import Styles from "./Home.module.css";

export const HomeImage = () => {
  return (
    <Parallax 
      className={Styles.home_image} 
      blur={{ min: -15, max: 11 }}
      bgImage={image} 
      strenth={20}>
      <div className={Styles.image_text_container}>
        <span className={Styles.img_text}>[ TEAS RESTAURACIÓN ]</span>
      </div>
    </Parallax>
  )
}
