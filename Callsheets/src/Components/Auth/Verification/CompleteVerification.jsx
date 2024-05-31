import React from 'react';
import './CompleteVerification.css';
import { Icon } from '@iconify/react/dist/iconify.js';


function CompleteVerification() {
  return (
    <>
        <div className='complete-verification-cont'>
            <p><Icon icon="ic:sharp-person" className='icon' /></p>
            <h2><span>N.Ramakrishna</span><span><Icon icon="typcn:tick" className='tick'/></span></h2>
            <p className='para'>Than you for verification. you can continue year task now.</p>
            <button className='done-btn'>Done</button>
        </div>
    </>
  )
}

export default CompleteVerification