import React from 'react';
import { ScrollDown } from "../Scroll/ScrollDown";
import { FaRegFilePdf } from "react-icons/fa";
import CV from "../../assets/CV-TEAS.pdf";
import Styles from "./Services.module.css";

export const Materials = () => {
  return (
    <div className={Styles.materials_container} id="materials">
        <div className={Styles.materials_images_container}>
            Images
        </div>

        <div className={Styles.materials_text_container}>
            <h3>Experiencia práctica en</h3>
                <ul className={Styles.materials_text}>
                    <li>Pétreos</li>
                    <li>Bronces</li>
                    <li>Madera (mobiliario, boisserie, imaginería religiosa)</li>
                    <li>Réplica de ornamentaciones, modelado de piezas</li>
                    <li>Recuperación de molduras</li>
                    <li>Tratamiento de muros y control de sales</li>
                    <li>Pintura mural</li>
                    <li>Dorado a la hoja</li>
                    <li>Material cerámico</li>
                </ul>

            <div className={Styles.materials_div_scroll}>
              <ScrollDown id="#who"/>
              <div className={Styles.about_button}>
                <a download="" href={CV} className={Styles.about_button_a}>Download Portfolio <FaRegFilePdf className={Styles.about_button_icon}/></a>
              </div>
            </div>
        </div>
    </div>
  )
}

/*  */