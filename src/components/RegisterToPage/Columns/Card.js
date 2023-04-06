import Clasess from './Card.module.css'
import { db } from '../../../Firebase/firebase'
import { ref, onValue } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../Firebase/firebase'
import { useState, useEffect, useContext } from 'react'
import CardPage from './CardPage'
import CartCtxTF from '../../Store/auth-context'

const Card = (props) => {
    const [todos, setTodos] = useState([])
    const Ctx = useContext(CartCtxTF)
    const UserID = Ctx.RegisterUuid
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser?.uid);
        });
    }, [])

    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            setTodos([])
            const data = snapshot.val()
            if (data && data[user]) {
                Object.values(data && data[user]).map((todo) => {
                    setTodos((oldArray) => [...oldArray, todo])
                })

            }
        })
        Ctx.RegisterUid(user)
    }, [user])
    const aray = todos.map(todo => <CardPage

        openCard={props.openCard}
        OpenModal={props.OpenModal}
        todo={todo}
        key={todo.uuid}
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