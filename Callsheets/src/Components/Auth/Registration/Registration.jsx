import React from 'react';
import './Registration.css';
import regImage from '../../../Assets/Images/Registration/RegistrationBg.png'
import { Icon } from '@iconify/react';
import ContinueBtn from '../../Shared/ContinueBtn/ContinueBtn';


function Registration() {
  return (
    <>
        <div className='registration-main-cont'>
            <div className='registration-image'>

            </div>
            <div className='registration-details'>
                <h1>Personal Information</h1>
                <form action="">
                <div className='input'>
                    <span><Icon icon="ic:baseline-person" className='icon' /></span>
                    <input type="text" placeholder='Full Name' />
                </div>
                <div className='input'>
                    <span><Icon icon="clarity:email-solid-badged"  className='icon'/></span>
                    <input type="text" placeholder='E-mail' />
                </div>
                <div className='input'>
                    <span><Icon icon="ph:gender-intersex-light" className='icon' /></span>
                    <input type="text" placeholder='Gender' />
                </div>
                <div className='input'>
                    <span><Icon icon="uis:calender" className='icon' /></span>
                    <input type="date" placeholder='Date of Birth' />
                </div>
                <div className='input'>
                    <span><Icon icon="mdi:telephone" className='icon' /></span>
                    <input type="text" placeholder='Mobile Number' />
                </div>
                <ContinueBtn/>
                
                </form>
            </div>
        </div>
    </>
  )
}

export default Registration