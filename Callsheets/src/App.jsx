import React,{ useState } from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './App.css'
import Loading from './Components/Loading/Loading'
import LoginOtp from './Components/Auth/Login/LoginOtp'
import LoginSignupPage from './Pages/LoginSignup/LoginSignupPage';
import LoginPage from './Pages/Login/LoginPage'
import SignupPage from './Pages/Signup/SignupPage'
import RegistrationPage from './Pages/Registration/RegistrationPage'
import SignupOtp from './Components/Auth/Signup/SignupOtp';
import MainPage from './Pages/MainPage/MainPage';
import Shedules from './Components/Shedules/Shedules'
import Profile from './Components/Profile/Profile'

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
                <Route path='/signup-otp' element={<SignupOtp/>}/>
                <Route path ='/registration' element={<RegistrationPage/>}/>



                <Route path='shedules' element={<MainPage/>}>
                  <Route path ='' element={<Shedules/>}/>
                  <Route path ='profile' element={<Profile/>}/>
                </Route>

            </Routes>
        </Router>
      

    </>
  )
}

export default App
