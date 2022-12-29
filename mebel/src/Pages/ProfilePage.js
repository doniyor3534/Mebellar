import React from 'react'
import LoginOyna from './All/LoginOyna';

export default function ProfilePage() {
  const user = true;
  return <div className='profilePage'>
    {
      !user ?
        <LoginOyna />
        : <div className='profileaccount'>
          <div className="saitbar">
            <li className='active'>Setting</li>
            <li>Historya</li>
            <li>Manzil</li>
            <li>Reyting</li>
          </div>
          <div className="profilcar">
            <img src="./img/profileimg.jfif" alt="" className="prifileimg" />
            <h1 className='profilename'> Name  not found ?</h1>
          </div>
        </div>
    }
  </div>;
}

