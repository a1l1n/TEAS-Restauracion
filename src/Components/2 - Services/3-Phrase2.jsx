import React from 'react';
import { Parallax } from 'react-parallax';
import image from "../../assets/4.jpg";
import Styles from "./Services.module.css";

export const Phrase2 = () => {
  return (
      <Parallax
        className={Styles.phrase_image}
        blur={{ min: -15, max: 11 }}
        bgImage={image}
        strenth={20}
        >
        <div className={Styles.services_separation_text}>
            <span>
                Los diversos perfiles que componen al grupo de TEAS permite abarcar la comprensión de un amplio abanico de materiales y soportes
            </span>
        </div>
      </Parallax>
  )
}
