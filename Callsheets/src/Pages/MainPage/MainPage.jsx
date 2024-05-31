import React from 'react';
import { useNavigate,Outlet } from 'react-router-dom';
import './MainPage.css';
import HeaderBar from '../../Components/Shared/HeaderBar/HeaderBar';
import SiderBar from '../../Components/Shared/SideBar/SiderBar';

function MainPage() {
  return (
   <>
   <div className='mainpage-main-container'>

    <div className='mainpage-center-container'>

        <div className='side-bar'>
            <SiderBar/>
            
        </div>

        <div className='header-and-outlet-container'>

            <div className='header-bar'>
                <HeaderBar/>   
            </div>

            <div className='outlet-container'>
                <Outlet/>
            </div>

        </div>
    </div>
   </div>


   </>
  )
}

export default MainPage