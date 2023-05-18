import UpdateBtn from "../ButtonsAndInputs/UpdateBtn";
import Modal from "../RegisterToPage/Modal/Modals";
import { useState, useContext, useEffect } from "react"
import CartContext from "../Store/cart-context"
import CartCtxTF from "../Store/auth-context";
import Clasess from './Cart.module.css'
import { set, ref } from "firebase/database";
import { db } from "../../Firebase/firebase";
import { uid } from "uid";
const Cart = (props) => {
    const UpdateModal = useContext(CartCtxTF)
    const CartCtx = useContext(CartContext);
    const [todo, setTodo] = useState("");
    const MTF = UpdateModal.isLoggedIn

    useEffect(() => {
        if (MTF) {
            setTodo(CartCtx.items);
        }
    }, [CartCtx.isValid]);

    const handlerTodoChange = e => {
        setTodo(e.target.value);
    };
    const AddedToCard = e => {
        e.preventDefault();
        const UserUid = UpdateModal.RegisterUuid
        const uuid = uid()
        set(ref(db, `/${UserUid}/${uuid}`), {
            todo,
            uuid,

        })
        setTodo("");
        props.updateClose(false)
    };
   
    return (
        <Modal closeMenu={props.closeMenu}>
            <form className={Clasess.inputs}>
                <input value={todo} onChange={handlerTodoChange} placeholder="Type Name oF The Column" type="text" />
                {!MTF ? <button className={Clasess.CreateCardBtn} onClick={AddedToCard}>Create Column </button> : <UpdateBtn updateClose={props.updateClose} updatedTodo={todo} />}
            </form>
        </Modal>
    );
};

export default Cart;