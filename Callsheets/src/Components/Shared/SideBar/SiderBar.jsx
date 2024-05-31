import React,{useState} from 'react';
import './SideBar.css';
import { useNavigate } from 'react-router-dom';
import Logo from "../../../Assets/Images/logo.jpg";
import {Icon} from '@iconify/react';
import ProfilePhoto from "../../../Assets/Images/SignupBg.png";


function SiderBar() {
  const [isActiveBtn,setIsActiveBtn]=useState('');
  const navigate=useNavigate()
  

  const moveTo=(component)=>{
    setIsActiveBtn(component)
    navigate(component)
   
   
  }

  return (
    <div className='side-bar-main-cont'>
      <div className='sidebar-logo'>
        <img src={Logo} className='cs-logo-img' alt='callsheets-logo'/>

      </div>
      <div className='menu-items-cont'>
          <Icon icon="fluent:home-16-filled"  className={`menu-item ${isActiveBtn === '' ? 'active' : ''}`} onClick={ ()=>{moveTo('')} }/>
          <Icon icon="material-symbols:library-books" className={`menu-item ${isActiveBtn === 'invitations' ? 'active' : ''}`} onClick={ ()=>{moveTo('invitations')}} />
          <img src={Logo} className={`cs-logo-img-at-menu ${isActiveBtn === 'callsheets' ? 'active' : ''}`}  alt='callsheets-logo' onClick={ ()=>{moveTo('callsheets')}}/>
          <Icon icon="material-symbols-light:sms-rounded" className={`menu-item ${isActiveBtn === 'messages' ? 'active' : ''}`}  onClick={ ()=>{moveTo('messages')}} />
          <img src={ProfilePhoto} className={`user-img-at-menu ${isActiveBtn === 'profile' ? 'active' : ''}`} alt='user-profile' onClick={ ()=>{moveTo('profile')}}/>


        

      </div>

      <div className='side-bar-logout'>
          <Icon icon="majesticons:door-exit" className='menu-item' style={{color: 'black'}} />

      </div>
    </div>
  )
}

export default SiderBar