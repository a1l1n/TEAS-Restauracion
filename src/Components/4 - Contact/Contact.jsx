import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Styles from "./Contact.module.css";

export const Contact = () => {
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
            <div className={Styles.contact_image}></div>

            <div className={Styles.contact_form}>
                <h1 className={Styles.contact_title}>Contactanos</h1>
{/*                 <h3>O podés dejarnos tu mensaje aquí: </h3> */}
                <form ref={form} onSubmit={sendEmail}>
                    <div className={Styles.contact_form_div}>
                        <label>Nombre: </label>
                        <input
                        type="text"
                        name="user_name"
                        placeholder="Dejanos tu nombre"
                        className={Styles.contact_form_input}
                        required
                        />
                    </div>

                    <div className={Styles.contact_form_div}>
                        <label>Tu e-mail</label>
                        <input
                        type="email"
                        name='user_email'
                        placeholder="Dejanos tu e-mail"
                        className={Styles.contact_form_input}
                        required
                        />
                    </div>

                    <div className={Styles.contact_form_div}>
                        <label>Asunto</label>
                        <input
                        type="text"
                        name="user_subject"
                        placeholder="Dejanos el asunto"
                        className={Styles.contact_form_input}
                        required
                        />
                    </div>

                    <div className={Styles.contact_form_div}>
                        <label>Y el mensaje</label>
                        <textarea
                        type="message"
                        cols="30"
                        rows="10"
                        placeholder="Compartinos tu consulta o proyecto"
                        className={Styles.contact_form_textarea}
                        required
                        />
                    </div>

                    <button className={Styles.contact_form_button}>Enviar</button>

                </form>
            </div>
                {/* Nombre, mail, asunto, mensaje */}
        </div>
    </section>
  )
}

/* 

Mail 
FaceBook
Instagram

Formulario

*/