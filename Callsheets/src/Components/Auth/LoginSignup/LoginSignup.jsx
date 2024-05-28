import React from 'react';
import './LoginSignup.css';
import {useNavigate} from 'react-router-dom';
import logo from '../../../Assets/Images/CallSheet/Logo.png'

function LoginSignup() {
    const navigate=useNavigate();
  return (
    <div className='loginsignup-cont'>
        {/* <div className='logo'>
            <img src={logo} alt="logo" />
        </div> */}
        <div className='flex-container'>
            <div className='content'>
                <h2>Call sheets</h2>
                <div className='para'>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                 used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </p>
                 <p>
                 In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
                  relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
                 </p>
                </div>
                
            </div>
            <div className='login-signup'>
              
                    <button className='login-btn' onClick={()=>{navigate('/login')}}>Login</button>
                    <button className='signup-btn'>SignUp</button>
            </div>

        </div>

    </div>
  )
}

export default LoginSignup