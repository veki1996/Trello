import React from "react";
const CartContext = React.createContext({
    items:'',
    isValid:false,
    updateUuuid:'',
    addItem:(item)=>{},
    sendValue:(value)=>{},
    updateItem:(id)=>{}
})
export default CartContext