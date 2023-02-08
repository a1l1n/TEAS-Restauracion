import React, { useState } from 'react';
import whoPics from "../../../assets/Sliders/Who/WhoImages.js";
import Styles from "./Slider.module.css";

export const WhoSlider = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(whoPics[0]);
    const [loaded, setLoaded] = useState(false);
    console.log("Esto es loaded: ", loaded)

    const prev = () => {
        setLoaded(false);
        setTimeout(() => {
            const condition = selectedIndex > 0;
            const nextIndex = condition ? selectedIndex - 1 : whoPics.length - 1;
            setSelectedImage(whoPics[nextIndex]);
            setSelectedIndex(nextIndex)
        }, 500)
    }

    const next = () => {
        setLoaded(false);
        setTimeout(() => {
            const condition = selectedIndex < whoPics.length - 1;
            const nextIndex = condition ? selectedIndex + 1 : 0;
            setSelectedImage(whoPics[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 500)
    }

  return (
    <div className={Styles.slider_container}>
        <button onClick={prev}>{"<"}</button>
        <div>
            <img src={selectedImage.url} alt={selectedImage.alt} className={loaded ? Styles.slider_img_loaded : Styles.slider_img} onLoad={() => setLoaded(true)}/>
            <h3>{selectedImage.description}</h3>
        </div>
        <button onClick={next}>{">"}</button>
    </div>
  )
}