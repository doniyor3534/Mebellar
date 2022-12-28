import React from 'react'
import LoginOyna from './All/LoginOyna';

export default function ProfilePage() {
  const user = true;
  return <div className='profilePage'>
    {
      !user?
        <LoginOyna />
        : <>
            Profile
        </>
    }
  </div>;
}

