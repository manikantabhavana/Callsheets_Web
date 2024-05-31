import React from 'react';
import './ReVerification.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';


function ReVerification() {
    const navigate=useNavigate();
  return (
   <>
            <div className='reverification-cont'>
                <p><Icon icon="bi:person-fill-x" className='icon'/></p>
                <p className='para'>Please request to again for verification</p>
                <button className='request-btn' onClick={()=>navigate("/verification/face")}>Request Again</button>
                <button className='cancel-btn'  onClick={()=>{navigate("")}}>Cancel</button>
            </div>
   </>
  )
}

export default ReVerification