import React from 'react';
import Styles from "./Services.module.css";
import { What } from './0-What';
import { Materials } from './2-Materials';
import { Who } from './4-Who';
import { Phrase1 } from './1-Phrase1';
import { Phrase2 } from './3-Phrase2';

export const Services = () => {
  return (
    <section id="services">
        <div className={Styles.services_container}>
          <What />
          <Phrase1 />
          <Materials />
          <Phrase2 />
          <Who />
        </div>
    </section>
  )
}

/* 
OBJETIVOS 05/02:
1) Seleccionar las fotos para cada una de las secciones
*/
