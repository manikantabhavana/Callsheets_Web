import React,{ useState } from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './App.css'
import Loading from './Components/Loading/Loading'
import LoginOtp from './Components/Auth/Login/LoginOtp'
import LoginSignupPage from './Pages/LoginSignup/LoginSignupPage';
import LoginPage from './Pages/Login/LoginPage'
import SignupPage from './Pages/Signup/SignupPage'
import RegistrationPage from './Pages/Registration/RegistrationPage'
<<<<<<< HEAD
import SignupOtp from './Components/Auth/Signup/SignupOtp';
import MainPage from './Pages/MainPage/MainPage';
import Shedules from './Components/Shedules/Shedules'
import Profile from './Components/Profile/Profile'
=======
import SignupOtp from './Components/Auth/Signup/SignupOtp'
import VerificationPage from './Pages/Verification/VerificationPage'
import FaceVerification from './Components/Auth/Verification/FaceVerification'
import NotificationVerification from './Components/Auth/Verification/NotificationVerification'
import ReVerification from './Components/Auth/Verification/ReVerification'
import CompleteVerification from './Components/Auth/Verification/CompleteVerification'
>>>>>>> 5871d317aebb966ebe0a02721db4a2f2c1ddb702

function App() {


  return (
    <>
        <Router>
            <Routes>

                <Route path='/' element={<Loading/>}>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/loginsignup' element={<LoginSignupPage/>}/>
                <Route path='/login-otp' element={<LoginOtp/>}/>
                <Route path='/signup' element={<SignupPage/>}/>
                <Route path='/signup-otp' element={<SignupOtp/>}/>
                <Route path ='/registration' element={<RegistrationPage/>}/>
<<<<<<< HEAD



                <Route path='shedules' element={<MainPage/>}>
                  <Route path ='' element={<Shedules/>}/>
                  <Route path ='profile' element={<Profile/>}/>
                </Route>

=======
                </Route>
                <Route path='/verification/' element={<VerificationPage/>}>
                  <Route path='face' element={<FaceVerification/>}/>
                  <Route path='face/notification' element={<NotificationVerification/>}/>
                  <Route path='face/notification/request' element={<ReVerification/>}/>
                  <Route path='face/notification/completed' element={<CompleteVerification/>}/>
                </Route>
>>>>>>> 5871d317aebb966ebe0a02721db4a2f2c1ddb702
            </Routes>
        </Router>
      

    </>
  )
}

export default App
