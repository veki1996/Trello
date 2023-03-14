import Modal from "../Modal/Modals"
import { useState, useContext } from "react"
import CartContext from "../Store/cart-context"
import { set, ref, } from 'firebase/database'
import { db } from "../../Hooks/firebase"
import Classes from './CartForCart.module.css'
import AddFilesToCard from "./AddFilesToCard"
import { uid } from "uid"
const CartForCard = (props) => {
    const [name, setName] = useState("")
    const [title, setTitle] = useState('')
    const[uploaded, setUploaded]=useState(false)
    const CardCtx = useContext(CartContext)
    const uids= uid()
    const uuid = CardCtx.updateUuuid
    const nameOnchangeHandler = (e) => {
        setName(e.target.value)
    }
    const AddNameAndTitle = (e) => {
        e.preventDefault()
       
        set(ref(db, `${uuid}/Names/${uids}`), {
            title: title,
            name: name,
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
                <AddFilesToCard uids={uids} />
                <button onClick={AddNameAndTitle} >+Add Card</button>
            </form>
        </Modal>
    );
};

export default CartForCard;