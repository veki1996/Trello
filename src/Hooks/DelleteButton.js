import { remove } from "firebase/database"
import { db } from "./firebase"
import {ref} from 'firebase/database'
import Calsess from './Dellete.module.css'
import dellete from '../components/Imeges/delete.png'
const DelleteBtn =(props)=>{
 
    const handlerDelete =()=>{
        const todo = props.todo
        remove(ref(db, `/${todo.uuid}`))
    }
    return(
        <div className={Calsess.MainBtn}>
        <img src={dellete}/>
        <button  onClick={()=>handlerDelete(props.todo)}>Dellete Column</button>
        </div>
        
    )
}
export default DelleteBtn