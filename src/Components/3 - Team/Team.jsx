import React from 'react';
import Styles from "./Team.module.css";

export const Team = () => {
  return (
    <section id="team">
        <div className={Styles.team_container}>
            <h1>Integrantes</h1>
            <p className={Styles.team_description}>Teas está conformado por un grupo de cuatro Técnicos en Conservación y Restauración. Así mismo cuenta con colaboradores de diferentes especialidades para conformar equipos más numerosos, dependiendo de la naturaleza de cada proyecto.</p>

            <div className={Styles.team_cards_container}>
                <div className={Styles.team_card}></div>
                <div className={Styles.team_card}></div>
                <div className={Styles.team_card}></div>
                <div className={Styles.team_card}></div>
            </div>
        </div>
    </section>
  )
}


/* 

1 - 4 cards para cada unx
2 - Botón con el CV actualizado de c/u
3 - Modal si hacés click en cada uno con su perfil

*/