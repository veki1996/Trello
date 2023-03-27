import React, { useState } from "react"
import Register from "./Register"
import Login from "./Login"
const RegisterAll = (props) => {
    const [Logged, setLogged] = useState(false)
    return (
        <>
            {!Logged && <Register   LoginBtn={(val) => { setLogged(val) }} />}
            {Logged && <Login LoggedIn={props.LoggedIn}/>}
        </>
    )
}
export default RegisterAll