import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useContext } from "react";
import { auth } from "../../../Firebase/firebase";
import CartCtxTF from "../../Store/auth-context";
import Modal from "../Modal/Modals";
import './Login.css'
function Login(props) {
  const Ctx = useContext(CartCtxTF)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setEror ] = useState('')
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const  handleSubmit = async(event)=> {
    event.preventDefault();
    try {
        const user = await signInWithEmailAndPassword(
            auth,
            email,
            password)
        console.log(user)
         Ctx.loggedForPage()
    } catch (error) {
      console.log(error.message)
      const errorParts = error.message.split('/');
      const errorType = errorParts[1];
        setEror(errorType)
    }
  }
 
  return (
    <Modal>
    <form className="LoginForm" onSubmit={handleSubmit}>
      <label>
        E-mail adresa:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Lozinka:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      {error}
      <button type="submit">Prijava</button>
    </form>
    </Modal>
  );
}

export default Login;
