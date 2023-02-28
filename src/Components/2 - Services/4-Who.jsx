import React from 'react';
import { ScrollDown } from '../Scroll/ScrollDown';
import { WhoSlider } from './Sliders/4-WhoSlider';
import Styles from "./Services.module.css";

export const Who = () => {
  return (
    <div className={Styles.who_container} id="who">
        <div className={Styles.who_text_container}>
            <h1>Quiénes somos</h1>
            <span className={Styles.who_text}>
              <p>El grupo <span className={Styles.what_span}>TEAS RESTAURACIÓN</span> está conformado por conservadores-restauradores formados académicamente  en la Universidad Nacional de las Artes (Buenos Aires, Argentina), en la <span className={Styles.what_span}>Licenciatura de Conservación y Restauración de Bienes Culturales</span>.</p>
              <p>Desde el año 2016 nos desempeñamos profesionalmente en proyectos autogestionados, en talleres y como parte de equipos para diferentes empresas. Esta trayectoria nos permitió establecer una metodología de trabajo sistemática con una capacidad resolutiva eficiente y de amplio espectro, pudiendo identificar numerosas patologías propias de cada material, establecer estrategias de acción y emplear materiales acordes a los criterios de conservación y preservación establecidos por instituciones de referencia internacional (<span className={Styles.what_span}>ICCROM</span>, <span className={Styles.what_span}>ICOM</span>, <span className={Styles.what_span}>IIC</span>, etc).</p>
            </span>
            <div className={Styles.who_div_scroll}>
              <ScrollDown id="#work" className={Styles.who_scroll} />
            </div>
        </div>

        <div className={Styles.who_images_container}>
            <WhoSlider />
        </div>
    </div>
  )
}
