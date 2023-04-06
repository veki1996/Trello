import { auth } from "../../Firebase/firebase"
import { signOut } from "firebase/auth"
import CartCtxTF from "../Store/auth-context"
import React, { useContext } from "react"
import Classes from './LogoutPage.module.css'
import { useNavigate } from "react-router-dom"
const LogoutPage = ()=>{
    const Ctx = useContext(CartCtxTF)
    const navigate = useNavigate()
    const login = async () => {
        await signOut(auth)
        navigate('/login')
        Ctx.loggedOutPage()
       
    }
    return(
        <button className={Classes.Logout} onClick={login}>Logout</button>
    )
}
export default LogoutPage