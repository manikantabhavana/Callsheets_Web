import React from 'react'
import './NotificationVerification.css';
import { useNavigate } from 'react-router-dom';
import person from '../../../Assets/Images/Verification/NotificationPerson.png';
import { Icon } from '@iconify/react/dist/iconify.js';
function NotificationVerification() {
  const navigate= useNavigate()
  return (
   <>
            <div className='notification-verification-cont'>
                {/* <img src={person} alt="person" className='person-image' /> */}
                <p><Icon icon="fluent:person-feedback-20-filled" className='icon'/></p>
                <p>Thank you for Requesting for verification.</p>
                <p>You will receive the notification for approval / decline in next 1 or 2 days.</p>
                <button className='done-btn' onClick={()=>{navigate('request')}}>Done</button>
            </div>
   </>
  )
}

export default NotificationVerification