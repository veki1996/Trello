import DelleteBtn from "../Hooks/DelleteButton"
import { useContext, useState } from "react"
import CartContext from "./Store/cart-context"
import CartCtxTF from "./Store/auth-context"
import Clasess from './CardPage.module.css'
import Redovi from "./Redovi"

const CardPage = (props) => {
    const UpdateCtx = useContext(CartCtxTF)
    const CartCtx = useContext(CartContext)
    const isSearching = UpdateCtx.isSearch
    const SearchingValue = UpdateCtx.SearchingValues
    const Update = () => {
        CartCtx.sendValue({
            value: props.todo.todo,
            uuid: props.todo.uuid
        })
        UpdateCtx.onLogin()
        props.OpenModal(true)
    }
    const AddToCard = () => {
        CartCtx.sendValue({
            uuid: props.todo.uuid
        })
        props.openCard(true)
    }

    const names = props.name ? Object.values(props.name) : [];
    let names2 = names.map((item) => <Redovi lines={item.name} title={item.title} key={item.uuid} columnUUid={props.todo.uuid} uuid={item.uuid} />)
    const niz = [
        props.column
    ]
    const Filtered = niz.filter(item =>
        item.toLowerCase().includes(SearchingValue.toLowerCase())
      );
      const filterh1 = isSearching? Filtered: props.column
    return (
        <div className={Clasess.MainPage}>
            <div className={Clasess.MainCardPageSecond}>
                <h1>{filterh1}</h1>
                <div className={Clasess.columnBtns}>
                    <button className={Clasess.EditColumnBtn} onClick={() => Update(props.todo)}>+Edit Column</button>
                    <DelleteBtn todo={props.todo} />
                </div>
            </div>
            <>{names2}</>
            <button className={Clasess.addCartBtn} onClick={AddToCard}>+ Add Card</button>
        </div>
    )
}
export default CardPage