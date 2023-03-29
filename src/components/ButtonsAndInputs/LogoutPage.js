import { auth } from "../../Firebase/firebase"
import { signOut } from "firebase/auth"
import CartCtxTF from "../Store/auth-context"
import React, { useContext } from "react"
import Classes from './LogoutPage.module.css'
const LogoutPage = ()=>{
    const Ctx = useContext(CartCtxTF)
    const login = async () => {
        await signOut(auth)
        Ctx.loggedOutPage()
    }
    return(
        <button className={Classes.Logout} onClick={login}>Logout</button>
    )
}
export default LogoutPage