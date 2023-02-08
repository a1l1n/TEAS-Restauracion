import React from 'react';
import Styles from "./Team.module.css";

export const Team = () => {
  return (
    <section id="team">
        <div className={Styles.team_container}>
            <h1>Integrantes</h1>
            <p className={Styles.team_description}>Teas está conformado por un grupo de cuatro Técnicos en Conservación y Restauración. Así mismo cuenta con colaboradores de diferentes especialidades para conformar equipos más numerosos, dependiendo de la naturaleza de cada proyecto.</p>

            <div className={Styles.team_cards_container}>
                <div className={Styles.team_card}>
                    <h3>Acá va la foto</h3>
                    <h2>Ailin Tobares</h2>
                    <h3>Acá viene botón CV</h3> 
                    <h3>Perfil Profesional</h3>
                    <div className={Styles.team_card_description}>
                        <h2>Perfil profesional</h2>
                        <ul>
                            <li>Investigación histórica</li>
                            <li>Relevamiento gráfico y fotográfico de patologías y procesos de intervención</li>
                            <li>Confección de protocolos e informes finales</li>
                            <li>Realización e interpretación de cateos estratigráficos</li>
                            <li>Restauración de policromías</li>
                            <li>Restauración de imaginería religiosa</li>
                        </ul>
                    </div>
                </div>

                <div className={Styles.team_card}>
                    <h3>Acá va la foto</h3>
                    <h2>Marina A. Pellegrini</h2>
                    <h3>Acá viene botón CV</h3> 
                    <h3>Perfil Profesional</h3>
                    <div className={Styles.team_card_description}>
                        <h2>Perfil profesional</h2>
                        <ul>
                            <li>Coordinación de equipos de trabajo</li>
                            <li>Restauración de murales</li>
                            <li>Realización e interpretación de cateos estratigráficos</li>
                            <li>Restauración de retablos</li>
                            <li>Conocimiento en la técnica de dorado a la hoja</li>
                            <li>Formulación de estucos</li>
                        </ul>
                    </div>
                </div>

                <div className={Styles.team_card}>
                    <h3>Acá va la foto</h3>
                    <h2>Matilde Mariani</h2>
                    <h3>Acá viene botón CV</h3> 
                    <h3>Perfil Profesional</h3>
                <div className={Styles.team_card_description}>
                        <h2>Perfil profesional</h2>
                        <ul>
                            <li>Restauración de papel</li>
                            <li>Restauración de pinturas de caballete</li>
                            <li>Restauración de murales</li>
                            <li>Restauración de retablos</li>
                            <li>Manejo del color en diversos materiales, y acabados con detalles</li>
                            <li>Conocimiento en la técnica de dorado a la hoja</li>
                        </ul>
                    </div>
                </div>

                <div className={Styles.team_card}>
                    <h3>Acá va la foto</h3>
                    <h2>Pedro Dalmazzo de G.</h2>
                    <h3>Acá viene botón CV</h3> 
                    <h3>Perfil Profesional</h3>
                <div className={Styles.team_card_description}>
                        <h2>Perfil profesional</h2>
                        <ul>
                            <li>Gestión de proyectos</li>
                            <li>Restauración de pétreos</li>
                            <li>Formulación de morteros símil-piedra y estucos</li>
                            <li>Restauración y confección de réplicas de ornamentos en madera, yeso y material</li>
                            <li>Tratamiento de superficies murarias</li>
                            <li>Restauración de retablos</li>
                        </ul>
                    </div>
                </div>
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