import UpdateBtn from "../../Hooks/UpdateBtn";
import Modal from "../Modal/Modals"
import { useState, useContext, useEffect } from "react"
import CartContext from "../Store/cart-context"
import CartCtxTF from "../Store/auth-context";
import Clasess from './Cart.module.css'

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
        CartCtx.addItem({
            item: todo,
        });
        setTodo("");
        props.updateClose(false)
    };


    return (
        <Modal>
            <form className={Clasess.inputs}>
                <input value={todo} onChange={handlerTodoChange} placeholder="Type Name oF The Column" type="text" />
                {!MTF? <button className={Clasess.CreateCardBtn} onClick={AddedToCard}>Create Card </button> : <UpdateBtn updateClose={props.updateClose} updatedTodo={todo} />}
            </form>
        </Modal>
    );
};

export default Cart;