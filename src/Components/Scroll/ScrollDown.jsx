import React from 'react';
import { BsChevronDoubleDown } from "react-icons/bs";
import Styles from "./ScrollDown.module.css";

export const ScrollDown = ({id}) => {
  return (
    <div className={Styles.services_scroll}>
        <a href={id}>
            <BsChevronDoubleDown className={Styles.scroll_icon}/>
        </a>
    </div>
  )
}
