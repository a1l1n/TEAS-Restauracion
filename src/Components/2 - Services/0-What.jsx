import React from 'react'; 
import { ScrollDown } from '../Scroll/ScrollDown';
import { WhatSlider } from "./Sliders/0-WhatSlider"
import Styles from "./Services.module.css";

export const What = () => {
  return (
    <div className={Styles.what_container}>
        <div className={Styles.what_text_container}>
            <h1>Servicios</h1>
            <ul className={Styles.what_text}>
                <li><span className={Styles.what_span}>Asesoramiento técnico</span> para confección de estrategias preservación y/o intervención</li>
                <li>Realización e interpertación de <span className={Styles.what_span}>cateos estratigráficos</span> y ensayos no destructivos</li>
                <li>Investigación histórica, diagnóstico, desarrollo de <b className={Styles.what_span}>documentación</b> pre y post intervención</li>
                <li>Conformación y <span className={Styles.what_span}>coordinación de equipos</span> idóneos de trabajo para proyectos de gran envergadura</li>
                <li>Restauración de pinturas de caballete</li>
                <li>Restauración de obras en soporte papel</li>
                <li>Restauración de marcos</li>
                <li>Intervención retabilística</li>
                <li>Producción de pintura mural</li>
                <li>Intervenciones orientadas a edificios patrimoniales</li>
            </ul>
          <div className={Styles.what_div_scroll}>
            <ScrollDown id="#materials" className={Styles.what_scroll}/>
          </div>
        </div>

        <div className={Styles.what_images_container}>
            <WhatSlider />
        </div>
    </div>
  )
}

