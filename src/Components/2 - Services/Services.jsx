import React from 'react';
import Styles from "./Services.module.css";
import { What } from './What';
import { Who } from './Who';

/* 
Quiénes somos
Qué ofrecemos
Misión, visió, valores -> 3 cards que roten y muestren la info
*/


export const Services = () => {
  return (
    <section id="services">
        <div className={Styles.services_container}>
          <What />
          <Who />
        </div>
    </section>
  )
}
