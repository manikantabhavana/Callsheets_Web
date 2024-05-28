import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import './LoginOtp.css'
import OtpInput from 'react-otp-input';
import Numpad from '../../Shared/Numpad/Numpad';
import ContinueBtn from '../../Shared/ContinueBtn/ContinueBtn';



function LoginOtp() {

    const [otp, setOtp] = useState('');
    const [timeLeft,setTimeLeft]=useState(60);
    const [isMobileDevice, setIsMobileDevice] = useState(false);
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

      useEffect(() => {
        const checkIsMobile = () => {
          setIsMobileDevice(window.innerWidth <= 890);
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
    
        return () => window.removeEventListener('resize', checkIsMobile);
      }, []);


  return (
    <div className='login-otp-main-cont'>
        <div className='login-otp-center-cont'>


            <h1 className='login-header'>Log In</h1> 

            <div>test</div>
            <h1 className='login-header'>Log In</h1>


            <h1 className='login-header'>Log In</h1> 
            <div>test</div>
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
            renderInput={(props) => <input {...props} readOnly={isMobileDevice} />}
          
            />
            <p className='otp-time-expire'>{timeLeft} sec left</p>
            <ContinueBtn/>
            <p className='otp-text-signup'>Don’t have an account? <span onClick={goToSignup}> Sign up!</span></p>
           
          

        </div>
         <Numpad className='otp-numpad' onKeyPress={handleKeyPress} />
    </div>
  )
}

export default LoginOtp