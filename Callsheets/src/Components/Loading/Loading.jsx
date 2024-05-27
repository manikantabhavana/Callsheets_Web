import React from 'react';
import {useNavigate} from 'react-router-dom'
import './Loading.css';
import LoadingImg from "../../assets/Images/LoadingImg.png";
import LoadingTitle from "../../assets/Images/LoadingTitle.png";


function Loading() {
    const navigate=useNavigate()
    setTimeout(()=>{
        navigate('/login-otp')
    },2000)





  return (
    <div className='loading-main-cont'>
        <img src={LoadingImg} className='loading-img' alt='callsheets-loading-bg'/>
        <img src={LoadingTitle} className='loading-title' alt='callsheets-title'/>
       
    </div>
  )
}

export default Loading