import React, { useState, useEffect, useContext } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import CartCtxTF from "../../components/Store/auth-context";
import Modal from "../../components/RegisterToPage/Modal/Modals";
import './Register.css'
import { useNavigate } from "react-router-dom";
function Register(props) {
    const Ctx = useContext(CartCtxTF)
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const [user, setUser] = useState({});
    const navigates = useNavigate()
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        if (user?.email?.length > 2) {
            Ctx.loggedForPage()
        }
    }, [Ctx, user?.email?.length])

    const handleSubmit = async (e) => {
        e.preventDefault();
          try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
      
            console.log(user);
            await updateProfile(user, {
              displayName: username
            });
            Ctx.loggedForPage()
            Ctx.RegisterUid(user?.uid)
           navigates('/registerPage')
          } catch (error) {
            console.log(error.message)
            const errorParts = error.message.split('/');
            const errorType = errorParts[1];
            setErrorMessage(errorType)
          
        }
      }
      
    const login = async () => {
        navigates('/login')
        await signOut(auth)
     
    }
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