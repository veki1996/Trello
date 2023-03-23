import Clasess from './Card.module.css'
import { db } from '../Hooks/firebase'
import { ref, onValue } from 'firebase/database'
import { useState, useEffect, useContext } from 'react'
import CardPage from './CardPage'
import CartCtxTF from './Store/auth-context'

const Card = (props) => {
    const [todos, setTodos] = useState([])
    const Ctx = useContext(CartCtxTF)
    const UserID = Ctx.RegisterUuid
   
   
    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            setTodos([])
            const data = snapshot.val()
            if (data !== null) {
                    Object.values(data && data[UserID]).map((todo) => {
                        setTodos((oldArray) => [...oldArray, todo])
                    })
                
            }
        })
    }, [])
    
    const aray = todos.map(todo => <CardPage

        openCard={props.openCard}
        OpenModal={props.OpenModal}
        todo={todo}
        key={todo.todo}
        name={todo.Names}
        column={todo.todo}
    />)
    return (
        <div className={Clasess.Column}>
            {aray}
        </div>
    )
}
export default Card