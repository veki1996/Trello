import Card from "./Columns/Card";
import Cart from "../Cart/Cart";
import { useState, useContext } from "react";
import CartCtxTF from "../Store/auth-context";
import CartForCard from "../Cart/CartForCard";
import UpdateCard from "../Cart/UpdateCard";
import HorizontalMenu from "./Menu/Menu";
const RegisterAndPage = () => {
    const NewUpdateAddCard = useContext(CartCtxTF)
    const [modal, setModal] = useState(false)
    const [modalcard, setModalCard] = useState(false)
    const UpdateModal = NewUpdateAddCard.isUpdateIlies
    const updateClose = (newA) => {
        setModal(newA)
        NewUpdateAddCard.onLogout()
    }
    const closeModals = () => {
        setModal(false)
        NewUpdateAddCard.onLogout()
    }
    return (
        <>
            <HorizontalMenu sendModal={(modal) => { setModal(modal) }} />
            <>
                {modalcard && <CartForCard showCard={(openClose) => { setModalCard(openClose) }} closeMenu={() => { setModalCard(false) }} />}
                {modal && <Cart updateClose={updateClose} closeMenu={closeModals} />}
                {UpdateModal && <UpdateCard />}
                <Card openCard={(openClose) => { setModalCard(openClose) }} OpenModal={() => { setModal(true) }} />
            </>
        </>
    )
}
export default RegisterAndPage