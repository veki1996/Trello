import Modal from "../RegisterToPage/Modal/Modals"
import { useState, useContext, useEffect } from "react"
import CartContext from "../Store/cart-context"
import { set, ref, } from 'firebase/database'
import { db } from "../../Firebase/firebase"
import Classes from './CartForCart.module.css'

import { uid } from "uid"
import CartCtxTF from "../Store/auth-context"
const CartForCard = (props) => {
    const Ctx = useContext(CartCtxTF)
    const ColumnUid = Ctx.RegisterUuid
    const [name, setName] = useState("")
    const [title, setTitle] = useState('')
   // const [uploaded, setUploaded] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date())
    const CardCtx = useContext(CartContext)
    const uids = uid()
    const uuid = CardCtx.updateUuuid
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const curentDate = currentTime.toString()
    const nameOnchangeHandler = (e) => {
        setName(e.target.value)
    }

    const AddNameAndTitle = (e) => {
        e.preventDefault()
        set(ref(db, `${ColumnUid}/${uuid}/Names/${uids}`), {
            title: title,
            name: name,
            Datum: curentDate,
            uuid: uids
        })

        props.showCard(false)
    }
    const titleOnChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    return (
        <Modal closeMenu={props.closeMenu}>
            <form className={Classes.CardForCard}>
                <label>Name:</label>
                <input onChange={nameOnchangeHandler} placeholder="Add Name Of Card" type="text" />
                <label>Description:</label>
                <input onChange={titleOnChangeHandler} placeholder="Type Description" type="text" />
                <button onClick={AddNameAndTitle} >+Add Card</button>
            </form>
        </Modal>
    );
};

export default CartForCard;