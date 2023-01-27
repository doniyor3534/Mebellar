import React, { useEffect } from 'react'
import { useState } from 'react';
import LoginOyna from './All/LoginOyna';

export default function ProfilePage() {
    const [user,setUser] = useState('')
   useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
   },[user])
  //  const img = user.photoURL;
  //  ////////
   const logOutfun = () => {
     localStorage.clear('user')
     window.location.reload()
   }
   console.log(user);
   return (
     <div className="profilePage">
       {!user ? (
         <LoginOyna />
       ) : (
         <div className="profileaccount">
           <div className="saitbar">
             <li>Setting</li>
             <li>Historya</li>
             <li>Manzil</li>
             <li onClick={logOutfun}>LogOut</li>
           </div>
           <div className="profilcar">
             <img src={user.photoURL} className="prifileimg" />
             <h1 className="profilename"> {user.displayName}</h1>
             <h6 className="profilename"> {user.email}</h6>
           </div>
         </div>
       )}
     </div>
   );
 }

