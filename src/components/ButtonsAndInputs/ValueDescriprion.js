import React, { useState, useEffect } from "react"
import Clasess from './ValueDescription.module.css'
const ValueDescription = (props) => {
    let descriptionValue = props.ValueDes
    descriptionValue.toString()
    console.log(typeof(descriptionValue))
        const des = document.getElementById('Description');
        if (des) {
            des.innerHTML = descriptionValue;
        };

    return (
        <div id="Description">
            {props.ValueDes}
        </div>
    )
}
export default ValueDescription