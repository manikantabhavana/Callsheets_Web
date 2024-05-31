import React from 'react'
import './HeaderBar.css';
import { Icon } from '@iconify/react';
import ProfilePhoto from "../../../Assets/Images/SignupBg.png";
function HeaderBar() {
  return (
    <div className='header-bar-main-container'>

        <div className='search-bar-cont'>
            <Icon icon="ri:search-line" className='search-icon-at-bar'/>
            <input type='search'
             placeholder='shedules, artists'
             />

        </div>

        <div className='header-date-icon-cont'>
        

            <span className='date-icon-at-bar'  ></span>
            

        </div>
        <Icon icon="mdi:bell-notification" className='bell-icon-at-bar'/>

       
          
        <div className='user-main-cont-at-bar'>
                
                <img src={ProfilePhoto} className='user-img-at-bar' alt='user-profile'/>
                <div className='user-details-cont'>
                    <p className='user-name-at-bar'>Pawan Kalyan konidela <br/>
                    <span className='artist-type'>Actor</span></p>
                </div>
        </div>



    </div>
  )
}

export default HeaderBar