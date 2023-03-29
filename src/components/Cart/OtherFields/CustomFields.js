import React, { useState } from "react"
import Classes from './CustomFields.module.css'
const CustomFields = () => {
    const [openClose, setOpenClose]=useState(false)
    
    return (
        <>
        <button className={Classes.ImageC} onClick={()=>{setOpenClose(true)}}>Custom Fields</button>
       {openClose && <div className={Classes.Field}>
                <div className={Classes.TopOfTheField}>
                <p>Custom Field</p>
                <button onClick={()=>{setOpenClose(false)}}>X</button>
                </div>
                <hr/>
            <input/>
        </div>}
        </>
    )
}
export default CustomFields