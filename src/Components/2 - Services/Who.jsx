import React from 'react';
import Styles from "./Services.module.css";

export const Who = () => {
  return (
    <div className={Styles.who_container}>
        <div className={Styles.who_text_container}>
            <h1>Quiénes somos</h1>

            <p>El grupo <b>TEAS RESTAURACIÓN</b> está conformado por conservadores-restauradores formados académicamente  en la Universidad Nacional de las Artes (Buenos Aires, Argentina), en la <b>Licenciatura de Conservación y Restauración de Bienes Culturales</b>.</p>

            <p>Desde el año 2016 hasta la fecha nos desempeñamos como profesionales. Esta trayectoria nos permitió establecer una metodología de trabajo sistemática con una capacidad resolutiva eficiente y de amplio espectro, pudiendo identificar numerosas patologías propias de cada material, establecer estrategias de acción y emplear materiales acordes a los criterios de conservación y preservación establecidos por instituciones de referencia internacional (<b>ICCROM</b>, <b>ICOM</b>, <b>IIC</b>, etc).</p>

            <p>Nos desempeñamos principalmente como profesionales calificados en obras de intervención edilicia dirigidas por empresas constructoras; al mismo tiempo gestionamos y realizamos trabajos particulares a menor escala. Esta trayectoria en edificios patrimoniales nos proveyó de una amplia experiencia debido a la multiplicidad de problemáticas, materiales y técnicas que confluyen en ellos.</p>
        </div>

        <div className={Styles.who_images_container}>
            IMÁGENES
        </div>
    </div>
  )
}
