import Card from "./components/Card";
import CartProvider from "./components/Store/CartProvider";
import Cart from "./components/Cart/Cart";
import { useState, useContext } from "react";
import CartCtxTF from "./components/Store/auth-context";
import CartForCard from "./components/Cart/CartForCard";
import UpdateCard from "./components/Cart/UpdateCard";
import HorizontalMenu from "./components/Menu/Menu";

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
            <div>
                {modalcard && <CartForCard showCard={(openClose) => { setModalCard(openClose) }} closeMenu={() => { setModalCard(false) }} />}
                {modal && <Cart updateClose={updateClose} closeMenu={closeModals} />}
                {UpdateModal && <UpdateCard />}
                <Card openCard={(openClose) => { setModalCard(openClose) }} OpenModal={() => { setModal(true) }} />
            </div>
        </>
    )
}
export default RegisterAndPage