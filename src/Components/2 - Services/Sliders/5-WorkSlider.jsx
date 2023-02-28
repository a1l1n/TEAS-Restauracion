/* import React, { useState } from 'react';
import workPics from "../../../assets/Sliders/Working/workingPics";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Styles from "./Slider.module.css";

export const WorkSlider = () => {
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
    <div className={Styles.slider_container}>
    <button onClick={prev} className={Styles.slider_left_button}><AiOutlineLeft /></button>
    <div className={Styles.slider_image_container}>
        <img src={selectedImage.url} alt={selectedImage.alt} className={loaded ? Styles.slider_img_loaded : Styles.slider_img} onLoad={() => setLoaded(true)}/>
        <div  className={loaded ? Styles.slider_description_loaded : Styles.slider_description}>
            <h3>{selectedImage.description}</h3>
        </div>
    </div>
    <button onClick={next} className={Styles.slider_right_button}><AiOutlineRight /></button>
</div>
  )
}
 */