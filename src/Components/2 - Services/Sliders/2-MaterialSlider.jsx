import React, { useState } from 'react';
import materialsPics from "../../../assets/Sliders/Materials/materialsPic";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Styles from "./Slider.module.css";

export const MaterialSlider = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(materialsPics[0]);
    const [loaded, setLoaded] = useState(false);

    const prev = () => {
        setLoaded(false);
        setTimeout(() => {
            const condition = selectedIndex > 0;
            const nextIndex = condition ? selectedIndex - 1 : materialsPics.length - 1;
            setSelectedImage(materialsPics[nextIndex]);
            setSelectedIndex(nextIndex)
        }, 500)
    }

    const next = () => {
        setLoaded(false);
        setTimeout(() => {
            const condition = selectedIndex < materialsPics.length - 1;
            const nextIndex = condition ? selectedIndex + 1 : 0;
            setSelectedImage(materialsPics[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 500)
    }

    return (
        <div>
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
        </div>
    )
}