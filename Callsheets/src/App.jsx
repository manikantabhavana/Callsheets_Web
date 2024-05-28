import React,{ useState } from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './App.css'
import Loading from './Components/Loading/Loading'
import LoginOtp from './Components/Auth/Login/LoginOtp'
import LoginSignupPage from './Pages/LoginSignup/LoginSignupPage';
import LoginPage from './Pages/Login/LoginPage'
import SignupPage from './Pages/Signup/SignupPage'
import RegistrationPage from './Pages/Registration/RegistrationPage'

function App() {


  return (
    <>
        <Router>
            <Routes>

                <Route path='/' element={<Loading/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/loginsignup' element={<LoginSignupPage/>}/>
                <Route path='/login-otp' element={<LoginOtp/>}/>
                <Route path='/signup' element={<SignupPage/>}/>
                <Route path ='/registration' element={<RegistrationPage/>}/>

            </Routes>
        </Router>
      

    </>
  )
}

export default App
