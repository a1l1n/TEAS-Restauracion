import React from 'react';
import Styles from "./Services.module.css";
import { What } from './0-What';
import { Materials } from './2-Materials';
import { Who } from './4-Who';
import { Phrase1 } from './1-Phrase1';
import { Phrase2 } from './3-Phrase2';
import { WorkGalery } from './5-WorkGalery';

export default function Services() {
  return (
    <section id="services">
        <div className={Styles.services_container}>
          <What />
          <Phrase1 />
          <Materials />
          <Phrase2 />
          <Who />
          <WorkGalery />
        </div>
    </section>
  )
}
