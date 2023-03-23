import React, { useState, useEffect, useContext } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Hooks/firebase";
import CartCtxTF from "../Store/auth-context";
import Modal from "../Modal/Modals";
import   './Register.css'
function Register(props) {
    const Ctx = useContext(CartCtxTF)
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const [user, setUser] = useState({});
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        if(user?.email?.length > 2){
           Ctx.loggedForPage()
        }
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword || username.length < 6) {
            setErrorMessage('Username must contain more than 6 letters and passwords must match')
        } else {
            try {
                const user = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    confirmPassword)
                console.log(user)
                Ctx.loggedForPage()
            } catch (error) {
                console.log(error.message)
                const errorParts = error.message.split('/');
                const errorType = errorParts[1];
                setErrorMessage(errorType)
            }

        }
    }
    const login = async () => {
        await signOut(auth)
        props.LoginBtn(true)
    }
    Ctx.RegisterUid(user?.uid)
    return (
        <Modal>
               <form className="form-container" onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <br />
            <label>
                Confirm Password:
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </label>

            <br />
            <p>{errorMessage}</p>
            <button type="submit">Register</button>
           
        </form >
        <div className="login-btn">I have Account <button onClick={login}>Login</button></div>
            </Modal>
    );
}

export default Register;