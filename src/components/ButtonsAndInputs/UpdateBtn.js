import { update } from "firebase/database"
import { useContext } from "react"
import { ref, } from 'firebase/database'
import CartContext from "../Store/cart-context"
import { db } from "../../Hooks/firebase"
import Clasess from './Update.module.css'
import CartCtxTF from "../Store/auth-context"
const UpdateBtn = (props) => {
    const Ctxt = useContext(CartCtxTF)
    const userID = Ctxt.RegisterUuid
    const todo = props.updatedTodo
    const Ctx = useContext(CartContext)
    const uuid = Ctx.updateUuuid
    const Updates = (e) => {
        e.preventDefault()
        update(ref(db, `/${userID}/${uuid}`), {
            todo,
            uuid: uuid
        })
        let a = false
        props.updateClose(a)
    }
    return (
        <button className={Clasess.UpdateColumnBtn} onClick={Updates}>Update</button>
    )
}
export default UpdateBtn