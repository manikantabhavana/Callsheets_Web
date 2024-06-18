import React,{ useState } from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './App.css'
import Loading from './Components/Loading/Loading'
import LoginOtp from './Components/Auth/Login/LoginOtp'
import LoginSignupPage from './Pages/LoginSignup/LoginSignupPage';
import LoginPage from './Pages/Login/LoginPage'
import SignupPage from './Pages/Signup/SignupPage';
import RegistrationPage from './Pages/Registration/RegistrationPage';
import MainPage from './Pages/MainPage/MainPage';
import Schedules from "./Components/Schedules/Schedules";
import Profile from "./Components/Profile/Profile";
import Chat from "./Components/Chat/Chat"
import Invitations from "./Components/Invitations/Invitations"
import Callsheets from './Components/SearchMenu/SearchMenu'
import SignupOtp from './Components/Auth/Signup/SignupOtp';
import VerificationPage from './Pages/Verification/VerificationPage';
import FaceVerification from './Components/Auth/Verification/FaceVerification';
import NotificationVerification from './Components/Auth/Verification/NotificationVerification';
import ReVerification from './Components/Auth/Verification/ReVerification';
import CompleteVerification from './Components/Auth/Verification/CompleteVerification';
import Search from './Components/Search/Search'
import SearchMenu from './Components/SearchMenu/SearchMenu'

function App() {


  return (
    <>
        <Router>
            <Routes>

                {/* <Route path='/' element={<Loading/>}/>
                <Route path='/' element={<Loading/>}/>              
                <Route path='/login-signup' element={<LoginSignupPage/>}/> */}
                <Route path='' element={<Loading/>}/>
                <Route path='login-signup' element={<LoginSignupPage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/login-otp' element={<LoginOtp/>}/>
                <Route path='/signup' element={<SignupPage/>}/>
                <Route path='/signup-otp' element={<SignupOtp/>}/>
                <Route path ='/registration' element={<RegistrationPage/>}/>
             
                
                {/* <Route path='schedules' element={<MainPage/>}>
                  <Route path ='' element={<Schedules/>}/>
                  <Route path ='profile' element={<Profile/>}/>
                </Route> */}
                
                <Route path='/verification/' element={<VerificationPage/>}>
                  <Route path='face' element={<FaceVerification/>}/>
                  <Route path='face/notification' element={<NotificationVerification/>}/>
                  <Route path='face/notification/request' element={<ReVerification/>}/>
                  <Route path='face/notification/completed' element={<CompleteVerification/>}/>
                </Route>



                <Route path='schedules' element={<MainPage/>}>
                  <Route path ='' element={<Schedules/>}/>
                  <Route path ='personal' element={<Profile/>}/>
                  <Route path ='chat' element={<Chat/>}/>
                  <Route path ='invitations' element={<Invitations/>}/>
                  
                  <Route path ='search' element={<SearchMenu/>}/>
                </Route>
                <Route path='search' element={<Search/>}/>






                
            </Routes>
        </Router>
      

    </>
  )
}

export default App
