import React from 'react';
import { Parallax } from 'react-parallax';
import image from "../../assets/2.jpg"
import Styles from "./Services.module.css";

export const Phrase1 = () => {
  return (
    <Parallax
        className={Styles.phrase_image}
        blur={{ min: -15, max: 11 }}
        bgImage={image}
        strenth={1000}
        >
        <div className={Styles.services_separation_text}>
            <span>
                Asesoramiento y trabajos de conservación, conservación preventiva, recuperación y restauración de bienes culturales
            </span>
        </div>
    </Parallax>
  )
}
