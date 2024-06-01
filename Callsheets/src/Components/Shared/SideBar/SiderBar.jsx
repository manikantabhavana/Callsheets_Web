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
          <span><Icon icon="fluent:home-16-filled"  className={`menu-item ${isActiveBtn === '' ? 'active' : ''}`} onClick={ ()=>{moveTo('')} }/><p className={isActiveBtn === '' ? 'active-text' : ''}>Home</p></span>
          <span><Icon icon="material-symbols:library-books" className={`menu-item ${isActiveBtn === 'invitations' ? 'active' : ''}`} onClick={ ()=>{moveTo('invitations')}} /><p className={isActiveBtn === 'invitations' ? 'active-text' : ''}>Invitations</p></span>
          <span><img src={Logo} className={`cs-logo-img-at-menu ${isActiveBtn === 'callsheets' ? 'active' : ''}`}  alt='callsheets-logo' onClick={ ()=>{moveTo('callsheets')}}/><p className={isActiveBtn === 'callsheets' ? 'active-text' : ''} >Callsheets</p></span>
          <span><Icon icon="material-symbols-light:sms-rounded" className={`menu-item ${isActiveBtn === 'messages' ? 'active' : ''}`}  onClick={ ()=>{moveTo('messages')}} /><p className={isActiveBtn === 'messages' ? 'active-text' : ''}>Chat</p></span>
          <span><img src={ProfilePhoto} className={`user-img-at-menu ${isActiveBtn === 'profile' ? 'active' : ''}`} alt='user-profile' onClick={ ()=>{moveTo('profile')}}/><p className={isActiveBtn === 'profile' ? 'active-text' : ''}>Profile</p></span>


        

      </div>

      <div className='side-bar-logout'>
          <Icon icon="majesticons:door-exit" className='menu-item' style={{color: 'black'}} />

      </div>
    </div>
  )
}

export default SiderBar