import React, { useState } from 'react';
import './Notifications.css';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

function Notifications() {
  const navigate = useNavigate();
  const [closeNotifications,setCloseNotifications]=useState(false)
  const notifications=[{message:'Trivikram is now following you.',time:'2'},
    {message:'Trivikram is now following you',time:'2'},
    {message:'Trivikram has accepted your appointement request.',time:'3'},
    {message:'Prabhas is now following you',time:'2'},
    {message:'Trivikram has sent a request for an appointment',time:'2'},
    {message:'Trivikram is now following you',time:'2'},
    {message:'Trivikram has accepted your appointement request.',time:'3'},
    {message:'Prabhas is now following you',time:'2'},
    {message:'Trivikram has sent a request for an appointment',time:'2'},
    {message:'Trivikram is now following you',time:'2'},
    {message:'Trivikram has accepted your appointement request.',time:'3'},
    {message:'Prabhas is now following you',time:'2'},
    {message:'Trivikram has sent a request for an appointment',time:'2'},
    {message:'Trivikram is now following you',time:'2'},
    {message:'Trivikram has accepted your appointement request.',time:'3'},
    {message:'Prabhas is now following you',time:'2'},
    {message:'Trivikram has sent a request for an appointment',time:'2'},
    
  ]

  const goBack=()=>{
    if(closeNotifications===false){
        setCloseNotifications(true)
    }else
    {
        setCloseNotifications(false)
    }
    
    
  }

  return (
    <div className={`notifications-main-cont  ${closeNotifications===true?'close':'open'}`} >
      <div className='notifications-header'>
        <Icon icon="solar:arrow-left-outline"  onClick={goBack} className='notifications-header-icon'/>
        <p>Notifications</p>
      </div>
      <div className='notifications-list'>
        {
          notifications.map((notification)=>(
            <div className='notification'>
                <Icon icon="mdi:bell-notification" className='bell-icon-at-notification'/>
                <p className='notification-message'>{notification.message}</p>
                <p className='notification-time'>{notification.time+' hours ago'}</p>

            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Notifications