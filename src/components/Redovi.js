import Clasess from './Redovi.module.css'
import CartCtxTF from './Store/auth-context'
import { useContext } from 'react'
import { ref, remove } from 'firebase/database'
import { db } from '../Hooks/firebase'
import Edit from './Imeges/edit.png'
import Del from './Imeges/delete.png'

const Redovi = (props) => {
   
    const Ctx = useContext(CartCtxTF)
    const IliesOnClick = () => {
        Ctx.ValidateUpdate({
            value: props.lines,
            ColumnId: props.columnUUid,
            uuid: props.uuid,
            title: props.title
        })

    }
    const RemoveCard = () => {
        remove(ref(db, `/${props.columnUUid}/Names/${props.uuid}`))
    }

    return (
    
        <div   className={Clasess.lines}>

             <h3  className={Clasess.ha3} >{props.lines}</h3> 
            <div className={Clasess.btns}>
                <>
                    <img src={Del} />
                    <button onClick={RemoveCard}>- Dellete</button>
                </>
                <>
                    <img src={Edit} />
                    <button onClick={IliesOnClick}>+Edit</button>
                </>
            </div>
        </div>
     
    )
}
export default Redovi 