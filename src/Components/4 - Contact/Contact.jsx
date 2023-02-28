import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Styles from "./Contact.module.css";

export default function Contact() {
    const form = useRef();

     const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
          "service_md66mxh", 
          "template_1kskdis", 
          form.current, 
          "hVMGP3Abq7X8FCK-O")
          .then((result) => {
              console.log("Mensaje enviado", result.text);
              Swal.fire({
                icon: 'success',
                title: 'Mensaje enviado!',
                text: 'En breves te estaremos respondiendo, muchas gracias por contactarte con nosotrxs!',
              })
          }, (error) => {
              console.log("Todo ha fallado, el horror", error.text);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un error, probá de nuevo más tarde por favor'
              })
            });
          e.target.reset();
        };
 

  return (
    <section id="contact">
        <div className={Styles.contact_container}>

            <div className={Styles.contact_form}>
                <h1 className={Styles.contact_title}>Contactanos</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <div className={Styles.contact_form_div}>
                        <div className={Styles.contact_form_label}>
                            <label className={Styles.contact_form_label}>Nombre: </label>
                        </div>
                        <input
                        type="text"
                        name="user_name"
                        className={Styles.contact_form_input}
                        required
                        />
                    </div>

                    <div className={Styles.contact_form_div}>
                        <div className={Styles.contact_form_label}>
                            <label>E-mail: </label>
                        </div>
                        <input
                        type="email"
                        name='user_email'
                        className={Styles.contact_form_input}
                        required
                        />
                    </div>

                    <div className={Styles.contact_form_div}>
                        <div className={Styles.contact_form_label}>
                            <label className={Styles.contact_form_label}>Asunto: </label>
                        </div>
                        <input
                        type="text"
                        name="user_subject"
                        className={Styles.contact_form_input}
                        required
                        />
                    </div>

                    <div className={Styles.contact_form_div}>
                        <div  className={Styles.contact_form_label}> 
                            <label>Y el mensaje: </label>
                        </div>
                       
                        <textarea
                        type="message"
                        name="message"
                        cols="40"
                        rows="10"
                        placeholder="Compartinos tu consulta o proyecto"
                        minlength="20"
                        maxLength="300"
                        className={Styles.contact_form_textarea}
                        required
                        />
                    </div>

                    <button className={Styles.contact_form_button}>Enviar</button>

                </form>
            </div>

{/*             <div className={Styles.contact_image}>
                <div className={Styles.contact_image_description}>
                    <h3>Limpieza de policromía - Recinto del Senado, Congreso de la Nación - Año 2006, Progorod S.A</h3>
                </div>
            </div> */}
        </div>
    </section>
  )
}
