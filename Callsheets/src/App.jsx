<<<<<<< HEAD
import React from 'react';
// import LoginPage from './Pages/Login/LoginPage';
import LoginSignupPage from './Pages/LoginSignup/LoginSignupPage';
=======
import { useState } from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'

import './App.css'
import Loading from './Components/Loading/Loading'
import LoginOtp from './Components/Auth/Login/LoginOtp'
>>>>>>> 5699fa08a0a057e12778fbb6750c90007f22c551


function App() {


  return (
    <>
<<<<<<< HEAD
      <div>
        {/* <LoginPage/> */}
        <LoginSignupPage/>
        
      </div>
=======
        <Router>
            <Routes>

                <Route path='/' element={<Loading/>}/>
                <Route path='/login-otp' element={<LoginOtp/>}/>

            </Routes>
        </Router>
      
>>>>>>> 5699fa08a0a057e12778fbb6750c90007f22c551
    </>
  )
}

export default App
