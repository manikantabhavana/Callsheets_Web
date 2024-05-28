import React,{useState,useEffect,useRef}from 'react';
import './Signup.css';
import { Icon } from '@iconify/react';
import {useNavigate} from 'react-router-dom'
import ContinueBtn from '../../Shared/ContinueBtn/ContinueBtn';
import Numpad from '../../Shared/Numpad/Numpad';
function Signup() {
  const navigate=useNavigate();

  const numpadRef = useRef(null);
  const [mobileNumber, setMobileNumber] = useState('');
  const [showNumberPad, setShowNumberPad] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  const goToSignup=()=>{
      navigate('sign-up')
  }
  const goToLoginOtp=()=>{
    navigate('/login-otp')
  }
  const handleKeyPress = (key) => {
    if (key === 'DEL') {
      
      setMobileNumber(mobileNumber.slice(0, -1));
    }
    else if(key===''){
      handleBlurInput()

    } else if (mobileNumber.length < 10) {
   
      setMobileNumber(mobileNumber + key);
    }
  };

  const handleFocusInput = () => {
    setShowNumberPad(true);
  };




  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobileDevice(window.innerWidth <= 890);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);


 
  const handleBlurInput = () => {
    setShowNumberPad(false)
   
  };

 
  return (
   <>
      <div className='signup-main-cont' >
      <div className={`input-and-numpad ${showNumberPad ? 'show-number-pad' : ''}`}  >
        <div className={`child login-center-cont ${showNumberPad ? 'move-up-input' : ''}`}>
              <h1 className='signup-header'>Sign Up</h1>
              <div className='mobile-number-text'> 
                  <Icon icon="clarity:mobile-solid" className='mbl-icon' />
                  <p>Mobile number</p>
              </div>
              <input type="text"
               placeholder='+91'
                onFocus={handleFocusInput}
                
                 value={mobileNumber}
                 onChange={(e)=>{setMobileNumber(e.target.value)}}
                readOnly={isMobileDevice}/> 
                        
              <ContinueBtn onClick={goToLoginOtp}/>
              <p className='otp-text-signup'>Already have an account? <span onClick={goToSignup}> Log in!</span></p>
          
            

          </div>
          <div className={`child numpad-login ${showNumberPad ? 'show-number-pad' : ''}`} ref={numpadRef}>
            <Numpad   onKeyPress={handleKeyPress}  />
          </div>
          </div>
      </div>
   
   </>
  )
}

export default Signup