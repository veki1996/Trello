import { remove, ref } from "firebase/database"
import { db } from "../../Firebase/firebase"
import { useContext } from "react"
import CartCtxTF from "../Store/auth-context"
import Classes from './DelleteField.module.css'
import Del from '../Images/delete.png'
const DelleteField = (props) => {
    const Ctx = useContext(CartCtxTF)
    const UserID = Ctx.RegisterUuid
    const ColumnID = Ctx.UpdateValue.ColumnId
    const CardID = Ctx.UpdateValue.uuid

    const DelleteField = (e) => {
        e.preventDefault()
        remove(ref(db, `/${UserID}/${ColumnID}/Names/${CardID}/Labels/${props.uuid}`))
        props.UpdateModal(true)

    }
    return (
        <button className={Classes.DelleteFieldBtn} onClick={DelleteField}><img src={Del} alt="delBtn"/></button>
    )
}
export default DelleteField