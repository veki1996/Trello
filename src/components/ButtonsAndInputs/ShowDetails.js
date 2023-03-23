import React, { useState } from "react"
import Clasess from './ShowDetails.module.css'
const ShowDetails = (props) => {
    const [ShowHide, setShowHide] = useState(true)
    const onDetailsHandler = (e) => {
        e.preventDefault()
        setShowHide(!ShowHide)
        props.ShowDetails(ShowHide)

    }
    return (
        <button className={Clasess.Details} onClick={onDetailsHandler}>
            {ShowHide ?
                'Show Details' :
                'Hide Details'}
        </button>
    )
}
export default ShowDetails