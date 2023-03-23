import React, { useState } from "react"
import Register from "./Register"
import Login from "./Login"
const RegisterAll = (props) => {
    const [Logged, setLogged] = useState(false)
    console.log(Logged)
    return (
        <>
            {!Logged && <Register LoggedIn={props.LoggedIn} LoginBtn={(val) => { setLogged(val) }} />}
            {Logged && <Login LoggedIn={props.LoggedIn}/>}
        </>
    )
}
export default RegisterAll