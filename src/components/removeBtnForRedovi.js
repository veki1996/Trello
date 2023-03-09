import { ref, remove } from "firebase/database"
import { db } from "../Hooks/firebase"
import Del from './Imeges/delete.png'
const RemoveBtn = (props)=>{
    const RemoveCard = () => {
        remove(ref(db, `/${props.columnUUid}/Names/${props.uuid}`))
    }
    return(
        <>
        <img alt='DelleteIMG' src={Del} />
        <button onClick={RemoveCard}>- Dellete</button>
        </>
    )
}
export default RemoveBtn