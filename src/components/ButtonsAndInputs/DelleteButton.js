import { remove } from "firebase/database"
import { db } from "../../Hooks/firebase"
import { ref } from 'firebase/database'
import Calsess from './Dellete.module.css'
import dellete from '../Images/delete.png'
import CartCtxTF from "../Store/auth-context"
import { useContext } from "react"

const DelleteBtn = (props) => {
    const Ctx = useContext(CartCtxTF)
    const UserID = Ctx.RegisterUuid
    const handlerDelete = () => {
        const todo = props.todo
        remove(ref(db, `/${UserID}/${todo.uuid}`))
    }
    return ( 
        <div className={Calsess.MainBtn}>
            <img alt="Dellete" src={dellete} />
            <button onClick={() => handlerDelete(props.todo)}>Dellete Column</button>
        </div>

    )
}
export default DelleteBtn