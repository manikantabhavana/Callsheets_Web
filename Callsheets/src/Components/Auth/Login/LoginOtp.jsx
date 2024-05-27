import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './LoginOtp.css'
import OtpInput from 'react-otp-input';
import Numpad from '../../Shared/Numpad/Numpad';
import ContinueBtn from '../../Shared/ContinueBtn/ContinueBtn';



function LoginOtp() {

    const [otp, setOtp] = useState('');
    const [timeLeft,setTimeLeft]=useState(60);
    const navigate=useNavigate()

    const goToSignup=()=>{
        navigate('sign-up')
    }

    const handleKeyPress = (key) => {
        if (key === 'DEL') {
          
          setOtp(otp.slice(0, -1));
        } else if (otp.length < 4) {
       
          setOtp(otp + key);
        }
      };


  return (
    <div className='login-otp-main-cont'>
        <div className='login-otp-center-cont'>
            <h1 className='login-header'>Log In</h1>
            <p className='otp-text'>We have send OTP on your
            mobile number</p>
            <OtpInput
            className='otp-input'
            shouldAutoFocus
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span style={{width:'1rem'}}> </span>}
            renderInput={(props) => <input {...props} />}
          
            />
            <p className='otp-time-expire'>{timeLeft} sec left</p>
            <ContinueBtn/>
            <p className='otp-text-signup'>Don’t have an account? <span onClick={goToSignup}> Sign up!</span></p>
            <Numpad className='otp-numpad' onKeyPress={handleKeyPress} />
          

        </div>
    </div>
  )
}

export default LoginOtp