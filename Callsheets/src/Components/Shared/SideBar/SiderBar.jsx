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
          <span className={isActiveBtn === '' ? 'active-span' : ''}><Icon icon="fluent:home-16-filled"  className={`menu-item ${isActiveBtn === '' ? 'active' : ''}`} onClick={ ()=>{moveTo('')} }/><p className={isActiveBtn === '' ? 'active-text' : ''}>Home</p></span>
          <span className={isActiveBtn === 'invitations' ? 'active-span' : ''}><Icon icon="material-symbols:library-books" className={`menu-item ${isActiveBtn === 'invitations' ? 'active' : ''}`} onClick={ ()=>{moveTo('invitations')}} /><p className={isActiveBtn === 'invitations' ? 'active-text' : ''}>Invitations</p></span>
          <span className={isActiveBtn === 'search' ? 'active-span' : ''}> <Icon icon="ri:search-line" className={`menu-item ${isActiveBtn === 'search' ? 'active' : ''}`} onClick={ ()=>{moveTo('search')}} /><p className={isActiveBtn === 'search' ? 'active-text' : ''} >Search</p></span>
          <span className={isActiveBtn === 'chat' ? 'active-span' : ''}><Icon icon="material-symbols-light:sms-rounded" className={`menu-item ${isActiveBtn === 'chat' ? 'active' : ''}`}  onClick={ ()=>{moveTo('chat')}} /><p className={isActiveBtn === 'chat' ? 'active-text' : ''}>Chat</p></span>
          <span className={isActiveBtn === 'personal' ? 'active-span' : ''}><Icon icon="mdi:user" className={`menu-item ${isActiveBtn === 'personal' ? 'active' : ''}`} onClick={ ()=>{moveTo('personal')}} /><p className={isActiveBtn === 'personal' ? 'active-text' : ''}>Personal</p></span>
         
        

      </div>

      <div className='side-bar-logout'>
          <Icon icon="majesticons:door-exit" className='menu-item' style={{color: 'black'}} />

      </div>
    </div>
  )
}

export default SiderBar