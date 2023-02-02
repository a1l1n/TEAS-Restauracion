import React from 'react';
import { HomeImage } from './HomeImage';
import { Social } from './Social';
import Styles from "./Home.module.css";

export const Home = () => {
  return (
    <section id="home" className={Styles.home_container}>
      <HomeImage />
      <Social />
    </section>
  )
}
