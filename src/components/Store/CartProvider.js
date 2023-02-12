import CartContext from "./cart-context";
import { useReducer } from "react";
import { db } from "../../Hooks/firebase";
import { set, ref } from 'firebase/database'
import { uid } from "uid";
const defaultState = {
    items: '',
    isValid: false,
    updateUuuid: '',
}
const cartReducer = (state, action) => {
    if (action.type === "ADD") {

        const todo = action.item.item
        const uuid = uid()
        set(ref(db, `/${uuid}`), {
            todo,
            uuid,
           
        })
    }
    if (action.type === "VALUE") {
        const newItems = action.value.value
        const Updateuid = action.value.uuid
        return {
            items: newItems,
            isValid: true,
            updateUuuid: Updateuid
        }
    }

    return defaultState
}
const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState)
    const addItemCartHandler = item => {
        dispatchCartAction({ type: "ADD", item: item })
    }

    const sendValueHandler = value => {
        dispatchCartAction({ type: "VALUE", value: value })
    }

    const updateItemOfCartHandler = id => {
        dispatchCartAction({ type: 'UPDATE', id: id })
    }

    const cartContext = {
        items: cartState.items,
        isValid: cartState.isValid,
        updateUuuid: cartState.updateUuuid,
        addItem: addItemCartHandler,
        sendValue: sendValueHandler,
        updateItem: updateItemOfCartHandler,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider