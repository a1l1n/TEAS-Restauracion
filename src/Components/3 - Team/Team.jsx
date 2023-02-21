import React from 'react';
import teamPics from "../../assets/Sliders/Team/Team";
import Styles from "./Team.module.css";

export const Team = () => {

  return (
    <section id="team">
        <div className={Styles.team_container}>
            <h1>Integrantes</h1>
            <p className={Styles.team_description}>Teas está conformado por un grupo de cuatro Técnicos en Conservación y Restauración. Así mismo cuenta con colaboradores de diferentes especialidades para conformar equipos más numerosos, dependiendo de la naturaleza de cada proyecto.</p>

            <div className={Styles.team_cards_container}>
            {
                teamPics.map((profile) => {
                    return (
                        <div className={Styles.team_card}>
                            <div className={Styles.team_card_front}>
                                <div className={Styles.team_card_div_img}>
                                    <img src={profile.url} alt={profile.alt} className={Styles.team_card_img}/>
                                </div>
                                <div className={Styles.team_card_div_text}>
                                    <h1>{profile.name}</h1>
                                    <h2>{profile.skill}</h2>
                                </div>
                            </div>

                            <div className={Styles.team_card_back}>
                                <div className={Styles.team_card_back_title}>
                                    <h3>Perfil Profesional</h3>
                                </div>
                                <div className={Styles.team_card_back_profile}>                                
                                {profile.profile.map((item) => {
                                    return (
                                    <ul>
                                        <li>{item}</li>
                                    </ul>
                                    )
                                    })} 
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    </section>
  )
}