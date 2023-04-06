/*import React, { useState } from "react"
import Register from "./Register"
import Login from "./Login"
import { Routes, Route } from "react-router-dom"
const RegisterAll = (props) => {
    const [Logged, setLogged] = useState(false)
    return (
        <>
            <Routes>
                <Route path="/*" element={<Register LoginBtn={(val) => { setLogged(val) }} />} />

               <Route path="login" element={<Login LoggedIn={props.LoggedIn} />}/>
            </Routes>
        </>

    )
}
export default RegisterAll */
