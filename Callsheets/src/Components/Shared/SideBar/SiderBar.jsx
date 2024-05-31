import React from 'react';
import './SideBar.css';
import Logo from "../../../Assets/Images/logo.jpg";
import {Icon} from '@iconify/react';
import ProfilePhoto from "../../../Assets/Images/SignupBg.png"

function SiderBar() {
  return (
    <div className='side-bar-main-cont'>
      <div className='sidebar-logo'>
        <img src={Logo} className='cs-logo-img' alt='callsheets-logo'/>

      </div>
      <div className='menu-items-cont'>
          <Icon icon="fluent:home-16-filled" className='menu-item' style={{color: 'black'}} />
          <Icon icon="material-symbols:library-books" className='menu-item'  style={{color: 'black'}} />
          <img src={Logo} className='cs-logo-img-at-menu menu-item'  alt='callsheets-logo'/>
          <Icon icon="material-symbols-light:sms-rounded" className='menu-item'  style={{color: 'black'}} />
          <img src={ProfilePhoto} className='user-img-at-menu menu-item' alt='user-profile'/>


        

      </div>

      <div className='side-bar-logout'>
          <Icon icon="majesticons:door-exit" className='menu-item' style={{color: 'black'}} />

      </div>
    </div>
  )
}

export default SiderBar