import React from 'react'; 
import Styles from "./Services.module.css";

export const What = () => {
  return (
    <div className={Styles.what_container}>
        <div className={Styles.what_text_container}>
            <h1>Qué ofrecemos</h1>
            <h3>Aspectos generales</h3>
            <ul>
                <li>Asesoramiento técnico para confección de estrategias preservación y/o intervención</li>
                <li>Realización e interpertación de cateos estratigráficos y ensayos no destructivos</li>
                <li>Investigación histórica, diagnóstico, desarrollo de documentación pre y post intervención</li>
                <li>Conformación y coordinación de equipos idóneos de trabajo para proyectos de gran envergadura</li>
                <li>Restauración de pinturas de caballete</li>
                <li>Restauración de obras en soporte papel</li>
                <li>Restauración de marcos</li>
                <li>Intervención retabilística</li>
                <li>Producción de pintura mural</li>
                <li>Intervenciones orientadas a edificios patrimoniales</li>
            </ul>

            <h3>Experiencia práctica en los siguientes soportes</h3>
            <ul>
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
        </div>

        <div className={Styles.what_images_container}>
            Images
        </div>
    </div>
  )
}
