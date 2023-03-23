import React, { useState, useEffect } from "react"
import Clasess from './ValueDescription.module.css'
const ValueDescription = (props) => {
    let descriptionValue = props.ValueDes
   
const OpenDescription=()=>{
    props.OpenDes(true)
}
    return (  <div onClick={OpenDescription} className={Clasess.Main} dangerouslySetInnerHTML={{__html:descriptionValue}}/> )
}
export default ValueDescription