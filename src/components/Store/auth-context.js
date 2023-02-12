import React, { useState } from "react";
const CartCtxTF = React.createContext({
    isLoggedIn: false,
    UpdateValue: {},
    isUpdateIlies: false,
    isSearch: false,
    SearchingValues: '',
    onLogout: () => { },
    onLogin: () => { },
    ValidateUpdate: () => { },
    onCloseIlises: () => { },
    SearchingValue: () => { },
})
export const AutchContextProvuider = (props) => {
    const [ValueOfSearch, setValueofSearch] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    const [isLoggedIn, setIsloogedIn] = useState(false)
    const [update, setUpdate] = useState({})
    const [ilies, setIlies] = useState(false)
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
    return <CartCtxTF.Provider
        value={{
            isLoggedIn: isLoggedIn,
            onLogin: LoginHandler,
            onLogout: logoutHandler,
            ValidateUpdate: OnvalidateHandler,
            onCloseIlises: closeIlisesHandler,
            SearchingValue: onSearchinghandler,
            UpdateValue: update,
            isUpdateIlies: ilies,
            isSearch: isSearching,
            SearchingValues: ValueOfSearch
        }}>{props.children}</CartCtxTF.Provider>
}
export default CartCtxTF