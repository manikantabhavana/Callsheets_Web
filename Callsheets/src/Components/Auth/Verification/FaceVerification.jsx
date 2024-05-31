import React from 'react';
import './FaceVerification.css';
import { useNavigate } from 'react-router-dom';
import faceimage from '../../../Assets/Images/Verification/FaceVerificationImage.png'

function FaceVerification() {
  const navigate=useNavigate()
  return (
    <>
        <div className='face-verification-cont'>
                <img src={faceimage} alt="fcaeimage" className='face-image'/>
                <button className='request-btn'onClick={()=>{navigate('notification')}} > Request for verification</button>
        </div>
    </>
  )
}

export default FaceVerification;