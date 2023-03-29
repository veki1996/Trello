import DelleteBtn from "../../ButtonsAndInputs/DelleteButton"
import { useContext, useState } from "react"
import CartContext from "../../Store/cart-context"
import CartCtxTF from "../../Store/auth-context"
import Clasess from './CardPage.module.css'
import Rows from "./Rows"
import { db } from "../../../Firebase/firebase"
import { ref, update } from "firebase/database"

const CardPage = (props) => {
    const UpdateCtx = useContext(CartCtxTF)
    const CartCtx = useContext(CartContext)
    const [InputVal, setInputVal] = useState(props.column)
    const UserUid = UpdateCtx.RegisterUuid
    // const isSearching = UpdateCtx.isSearch
    // const SearchingValue = UpdateCtx.SearchingValues
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
    const onChangeHandler = (e) => {
        setInputVal(e.target.value)
        update(ref(db, `/${UserUid}/${props.todo.uuid}`), {
           todo:e.target.value
        })
    }
    console.log(props.todo.uuid)
    const names = props.name ? Object.values(props.name) : [];
    let names2 = names.map((item) => <Rows lines={item.name} title={item.title} key={item.uuid} columnUUid={props.todo.uuid} uuid={item.uuid} />)
    return (
        <div className={Clasess.MainPage}>
            <div className={Clasess.MainCardPageSecond}>
                <input onChange={onChangeHandler} value={InputVal}/>
                <div className={Clasess.columnBtns}>
                 {/* <button className={Clasess.EditColumnBtn} onClick={() => Update(props.todo)}>+Edit Column</button>*/}
                    <DelleteBtn todo={props.todo} />
                </div>
            </div>
            <>{names2}</>
            <button className={Clasess.addCartBtn} onClick={AddToCard}>+ Add Card</button>
        </div>
    )
}
export default CardPage