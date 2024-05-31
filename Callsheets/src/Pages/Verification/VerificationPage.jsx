import React from 'react';
import {Outlet} from 'react-router-dom';
import './VerificationPage.css';
import logoimage from '../../Assets/Images/LoadingImg.png';
import title from '../../Assets/Images/LoadingTitle.png'

function VerificationPage() {
  return (
    <>
    
        <div className='verification-main-cont'>

            <div className='verification-cont'>
                    <div className='images'>
                        <img src={logoimage} alt="image" className='logo-image'/>
                        <img src={title} alt="title" className='title-image' />
                    </div>
                    <div className='face-verification'>
                            <Outlet/>
                    
                    </div>
            </div>

        
        </div>        
    </>
  )
}

export default VerificationPage