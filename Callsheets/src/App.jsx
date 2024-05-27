
import LoginSignupPage from './Pages/LoginSignup/LoginSignupPage';
import { useState } from 'react'
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import './App.css'
import Loading from './Components/Loading/Loading'
import LoginOtp from './Components/Auth/Login/LoginOtp'



function App() {


  return (
    <>

        <Router>
            <Routes>

                <Route path='/' element={<Loading/>}/>
                <Route path='/login-otp' element={<LoginOtp/>}/>

            </Routes>
        </Router>
      

    </>
  )
}

export default App
