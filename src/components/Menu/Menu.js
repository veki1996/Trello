import React from "react";
import "./HorizontalMenu.css";
import { useState, useContext } from "react";
import CartCtxTF from "../Store/auth-context";
import LogoutPage from "../ButtonsAndInputs/LogoutPage";
const HorizontalMenu = (props) => {
    const ctx = useContext(CartCtxTF)
    const [input, setInput] = useState(true)
    const ShowBiggerInput = () => {
        setInput(false)
    }
    const onBlurInput = () => {
        setInput(true)
    }
    const InputValue = (e)=>{
        ctx.SearchingValue(e.target.value)
    }
    return (
        <div className="menu">
            <div className="ItemsWotkspace">
                <div className="menu-item">Workspace  </div>
                <div className="menu-item">Recent </div>
                <div className="menu-item">Starrted</div>
                <div className="menu-item">Templates</div>
                <div className="menu-item">Create</div>
                <button onClick={()=>{props.sendModal(true)}}>Add Column</button>
            </div>
            <div>
                {input ? <input onClick={ShowBiggerInput} placeholder="Search" /> : <input placeholder="Search" onChange={InputValue} className="ExpendInput" onBlur={onBlurInput} />}
                <LogoutPage/>
            </div>
        </div>
    );
};

export default HorizontalMenu;