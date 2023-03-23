import { auth } from "../../Hooks/firebase"
import { signOut } from "firebase/auth"
import CartCtxTF from "../Store/auth-context"
import React, { useContext } from "react"
const LogoutPage = ()=>{
    const Ctx = useContext(CartCtxTF)
    const login = async () => {
        await signOut(auth)
        Ctx.loggedOutPage()
    }
    return(
        <button onClick={login}>Logout</button>
    )
}
export default LogoutPage