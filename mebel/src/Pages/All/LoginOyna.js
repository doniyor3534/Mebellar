import React, { useEffect, useState } from 'react';
import { Auth, Provider } from '../../Auth/Config';
import { signInWithPopup} from "firebase/auth";

export default function LoginOyna() {
  const [user,setUser] = useState('')
  const loginfun = () => {
    signInWithPopup(Auth, Provider).then((data) => {
      setUser(data.user)
      localStorage.setItem("user", JSON.stringify(data.user));
      })
  }
  useEffect(() => {
    let a = JSON.parse(localStorage.getItem("user"));
     console.log(a)
  },[])
  const send = (e) => {
    e.preventDefault()
  }
  return (
      <form className='kirishform' onSubmitCapture={send}>
          <h1 className='formTitle'>Kirish</h1>
          <input type="text" name='email' placeholder='Email:'/>
          <input type="password" name='password' placeholder='Parol:' />
          <a href='#'>Parolni unutdingizmi ?</a>
      <button className="formbtn">Kirish</button>
      <button className='GoogleAuthbtn' onClick={loginfun} >Google orqali kirish</button>
          <p>Akountingiz yo'qmi :  <a href="#">Yangi akount !</a></p>
    </form>
  )
}
