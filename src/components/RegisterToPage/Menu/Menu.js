import React from "react";
import "./HorizontalMenu.css";
import { useState, /*useContext*/ useEffect } from "react";
//import CartCtxTF from "../Store/auth-context";
import LogoutPage from "../../ButtonsAndInputs/LogoutPage";
import { auth } from "../../../Firebase/firebase";
import { useNavigate } from "react-router-dom";
const HorizontalMenu = (props) => {
    /* const ctx = useContext(CartCtxTF)
     const [input, setInput] = useState(true)2*/
    const [displayName, setDisplayName] = useState(null);
    const navigate = useNavigate()
    /* const ShowBiggerInput = () => {
         setInput(false)
     }
      const onBlurInput = () => {
           setInput(true)
       }
       const InputValue = (e) => {
           ctx.SearchingValue(e.target.value)
       }
   */


    useEffect(() => {
        const authUnsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setDisplayName(user.displayName);
            } else {
                setDisplayName(null);
            }
        });
        return () => {
            authUnsubscribe();
        };
    }, []);
    return (
        <div className="menu">
            <div className="ItemsWotkspace">
                { /*<div className="menu-item">Workspace  </div>
                <div className="menu-item">Recent </div>
                <div className="menu-item">Starrted</div>
                <div className="menu-item">Templates</div>
                 <div className="menu-item">Create</div>*/}
                <button onClick={() => { props.sendModal(true) }}>Add Column</button>
            </div>
            <div className="User">
                {<p>Welcome: <b>{displayName}</b></p>}
                {/* commeent search // input ? <input onClick={ShowBiggerInput} placeholder="Search" /> : <input placeholder="Search" onChange={InputValue} className="ExpendInput" onBlur={onBlurInput} />*/}
                <LogoutPage />
            </div>
        </div>
    );
};

export default HorizontalMenu;