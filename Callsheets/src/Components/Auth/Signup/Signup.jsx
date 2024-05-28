import React,{useState} from 'react';
import './Signup.css';
import { Icon } from '@iconify/react';
import {useNavigate} from 'react-router-dom'
import ContinueBtn from '../../Shared/ContinueBtn/ContinueBtn';
import Numpad from '../../Shared/Numpad/Numpad';

function Signup() {
    const navigate=useNavigate();
    const [otp, setOtp] = useState('');
    const goToSignup=()=>{
        navigate('sign-up')
    }
    const goToLoginOtp=()=>{
      navigate('/login-otp')
    }
    const handleKeyPress = (key) => {
      if (key === 'DEL') {
        
        setOtp(otp.slice(0, -1));
      } else if (otp.length < 4) {
     
        setOtp(otp + key);
      }
    };
  return (
    <>
    <div className='signup-main-cont'>
    <div className='signup-center-cont'>
          <h1 className='signup-header'>Sign Up</h1>
          <p className='otp-text'> <p><Icon icon="clarity:mobile-solid" className='mbl-icon' /> </p> <p>Mobile number</p></p>
          <input type="text" placeholder='+91' /> 
                    
          <ContinueBtn onClick={goToLoginOtp}/>
          <p className='otp-text-signup'>Don’t have an account? <span onClick={goToSignup}> Sign up!</span></p>
          <Numpad className='otp-numpad' onKeyPress={handleKeyPress} />
        

      </div>

    </div>
    </>
  )
}

export default Signup