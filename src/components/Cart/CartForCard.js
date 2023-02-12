import Modal from "../Modal/Modals"
import { useState, useContext } from "react"
import CartContext from "../Store/cart-context"
import { set, ref, } from 'firebase/database'
import { db } from "../../Hooks/firebase"
import { uid } from "uid"
import Classes from './CartForCart.module.css'
const CartForCard = (props) => {
    const [name, setName] = useState("")
    const [title, setTitle] = useState('')
    const CardCtx = useContext(CartContext)
    const uuid = CardCtx.updateUuuid
    const nameOnchangeHandler = (e) => {
        setName(e.target.value)
    }
    const AddNameAndTitle = (e) => {
        e.preventDefault()
        const newuuid = uid()
        set(ref(db, `${uuid}/Names/${newuuid}`), {
            
                title: title,
                name: name,
                uuid: newuuid
            
        })
      
        props.showCard(false)
    }
    const titleOnChangeHandler = (e) => {
        setTitle(e.target.value)
    }
    return (
        <Modal >
            <form className={Classes.CardForCard}>
                <label>Name</label>
                <input onChange={nameOnchangeHandler} placeholder="Add Name Of Card" type="text" />
                <label>Description</label>
                <input onChange={titleOnChangeHandler}placeholder="Type Description" type="text" />
                <button onClick={AddNameAndTitle}>+Add Card</button>
            </form>
        </Modal>
    );
};

export default CartForCard;