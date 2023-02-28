import Clasess from './Card.module.css'
import { db } from '../Hooks/firebase'
import { set, ref, onValue } from 'firebase/database'
import { useState, useEffect } from 'react'
import CardPage from './CardPage'
const Card = (props) => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            setTodos([])
            const data = snapshot.val()
            if (data !== null) {
                Object.values(data).map((todo) => {
                    setTodos((oldArray) => [...oldArray, todo])
                })
            }
        })
    }, [])
    const aray = todos.map(todo =>  <CardPage openCard={props.openCard} OpenModal={props.OpenModal} todo={todo} key={todo.todo} name={todo.Names} column={todo.todo}/>)
    
    return (
        <div className={Clasess.Column}>
            {aray}
        </div>
    )
}
export default Card