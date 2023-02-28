import React, { useState } from 'react';
import workPics from "../../assets/Sliders/Working/workingPics";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { ScrollDown } from "../Scroll/ScrollDown";
import Style from "./Sliders/Slider.module.css";
import Styles from "./Services.module.css";

export const WorkGalery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(workPics[0]);
  const [loaded, setLoaded] = useState(false);

  const prev = () => {
    setLoaded(false);
    setTimeout(() => {
        const condition = selectedIndex > 0;
        const nextIndex = condition ? selectedIndex - 1 : workPics.length - 1;
        setSelectedImage(workPics[nextIndex]);
        setSelectedIndex(nextIndex)
    }, 500)
}

const next = () => {
  setLoaded(false);
  setTimeout(() => {
      const condition = selectedIndex < workPics.length - 1;
      const nextIndex = condition ? selectedIndex + 1 : 0;
      setSelectedImage(workPics[nextIndex]);
      setSelectedIndex(nextIndex);
  }, 500)
}

  return (
    <div className={Styles.work_container} id="work">
      <div className={Styles.work_image_container}>
        <button onClick={prev} className={Style.slider_left_button}><AiOutlineLeft /></button>
        <div className={Style.slider_image_container}>
          <img src={selectedImage.url} alt={selectedImage.alt} className={loaded ? Style.slider_img_loaded : Style.slider_img} onLoad={() => setLoaded(true)}/>
        </div>
        <button onClick={next} className={Style.slider_right_button}><AiOutlineRight /></button>
      </div>

      <div className={Styles.work_text_container}>
        <div className={loaded ? Style.slider_work_description_loaded : Style.slider_work_description}>
          <h3>{selectedImage.description}</h3>
        </div>

        <div className={Styles.work_text}>
          <h1>Alcance de nuestro trabajo</h1>
          <p>Nos desempeñamos principalmente como profesionales calificados en obras de intervención edilicia dirigidas por empresas constructoras; al mismo tiempo gestionamos y realizamos trabajos particulares a menor escala.</p>
          <div className={Styles.work_div_scroll}>
              <ScrollDown id="#team" className={Styles.work_scroll} />
          </div>

        </div>


      </div> 
    </div>
  )
}
