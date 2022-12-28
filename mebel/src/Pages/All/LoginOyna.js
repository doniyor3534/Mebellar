import React from 'react'

export default function LoginOyna() {
  return (
      <form className='kirishform'>
          <h1 className='formTitle'>Kirish</h1>
          <input type="text" name='email' placeholder='Email:'/>
          <input type="password" name='password' placeholder='Parol:' />
          <a href='#'>Parolni unutdingizmi ?</a>
          <button className="formbtn">Kirish</button>
          <p>Akountingiz yo'qmi :  <a href="#">Yangi akount !</a></p>
    </form>
  )
}
