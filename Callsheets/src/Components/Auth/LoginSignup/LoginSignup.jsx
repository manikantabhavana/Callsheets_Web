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
<<<<<<< HEAD
                </div>
                <div className='signup'>
                    <button className='signup-btn' onClick={()=>{navigate('/signup')}}>SignUp</button>
                </div>
=======
                    <button className='signup-btn'>SignUp</button>
>>>>>>> 3273198d183feb56d1f1768d1a4f69856130650d
            </div>

        </div>

    </div>
  )
}

export default LoginSignup