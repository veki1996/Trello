import React, { useState } from "react";
const CartCtxTF = React.createContext({
    isLoggedIn: false,
    UpdateValue: {},
    isUpdateIlies: false,
    isSearch: false,
    SearchingValues: '',
    RegisterUuid :'',
    pageLogin:false,
    onLogout: () => { },
    onLogin: () => { },
    ValidateUpdate: () => { },
    onCloseIlises: () => { },
    SearchingValue: () => { },
    RegisterUid:()=>{},
    loggedForPage:()=>{},
    loggedOutPage:()=>{},
})
export const AutchContextProvuider = (props) => {
    const [ValueOfSearch, setValueofSearch] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    const [isLoggedIn, setIsloogedIn] = useState(false)
    const [update, setUpdate] = useState({})
    const [ilies, setIlies] = useState(false)
    const [RegisterValue, setRegisterValue]= useState('')
    const [loginPage, setLoginPage]= useState(false)
    const RegisterHandler= (value)=>{
        setRegisterValue(value)
    }
    const logoutHandler = () => {
        setIsloogedIn(false)
    }
    const LoginHandler = () => {
        setIsloogedIn(true)
    }
    const OnvalidateHandler = (value) => {
        setUpdate(value)
        setIlies(true)
    }
    const closeIlisesHandler = () => {
        setIlies(false)
    }
    const onSearchinghandler = (value) => {
        setIsSearching(true)
        setValueofSearch(value)
    }
    const onLoginPageHandler=()=>{
        setLoginPage(true)
    }
    const onLogoutPageHandler=()=>{
        setLoginPage(false)
    }
    return <CartCtxTF.Provider
        value={{
            isLoggedIn: isLoggedIn,
            onLogin: LoginHandler,
            onLogout: logoutHandler,
            ValidateUpdate: OnvalidateHandler,
            onCloseIlises: closeIlisesHandler,
            SearchingValue: onSearchinghandler,
            RegisterUid:RegisterHandler,
            loggedForPage:onLoginPageHandler,
            loggedOutPage:onLogoutPageHandler,
            UpdateValue: update,
            isUpdateIlies: ilies,
            isSearch: isSearching,
            RegisterUuid:RegisterValue,
            SearchingValues: ValueOfSearch,
            pageLogin:loginPage,

        }}>{props.children}</CartCtxTF.Provider>
}
export default CartCtxTF