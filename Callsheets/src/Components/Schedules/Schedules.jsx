import React, { useState } from 'react';
import './Schedules.css';
import { Icon } from '@iconify/react';
import SchedulesList from './SchedulesList';
import Callender from './Callender';
import ProfilePhoto from "../../Assets/Images/SignupBg.png";
import Logo from "../../Assets/Images/logo.jpg";

function Schedules() {
  const [username,setUsername]=useState('Pawan Kalyan');
  const [dates,setDates]=useState([]);
  const [filter,setFilter]=useState('Today');
  const [showDateInput, setShowDateInput] = useState(false);

  const handleDateIconClick = () => {
    
    setShowDateInput(true);
   
    setTimeout(() => {
      document.getElementById('date-input').focus();
    }, 0);
  };
  


  


  return (
    <div className='schedules-main-cont'>
      <div className='schedules-banner-mob'>
        <div className='bell-and-profile-mob'>

          <Icon icon="mdi:bell-notification" className='bell-icon-at-bar'/>
          <img src={ProfilePhoto} className='user-img-at-bar' alt='user-profile'/>

        </div>

        <h2>Hii,</h2>
        <h2>{username}!</h2>
        <p>My Schedules</p>

        <div className='search-bar-cont'>
              <Icon icon="ri:search-line" className='search-icon-at-bar'/>
              <input type='search'
              placeholder='shedules, artists'
              />

        </div>

      </div>

      <div className='schedules-main-left-cont'>
          <div className='schedules-banner-cont'>
           
            <h2>Hii,</h2>
            <h2>{username}!</h2>
            <p>My Schedules</p>

           


          </div>
          <div className='schedules-calender-main-cont'>


              <div className='schedules-calender-header'>

                <p className='schedules-calender-cont-date'>{filter}</p>
                <span className='date-icon-at-bar' onClick={handleDateIconClick}></span>
                <div className='schedules-calender-filter-cont'>

                  <div className='schedules-calander-filter'>
                    <span >{filter}</span>
                  
                    <Icon icon="ep:menu"  className='schedules-calender-filter-icon' />
                  </div>
                  
                  <div className='schedules-calender-filter-options'>
                      <p className='schedules-calender-filter-option' onClick={()=>{setFilter('Today')}}>Today</p>
                      <p  className='schedules-calender-filter-option' onClick={()=>{setFilter('This Week')}}>This Week</p>
                      <p  className='schedules-calender-filter-option' onClick={()=>{setFilter('This Month')}}>This Month</p>
                  </div>
                </div>

              </div>


              <div className='schedules-calender-cont'>
                  <Callender/>
              </div>

       

          </div>

        </div>

      <div className='schedules-cont'>
          <SchedulesList/>
      </div>

        
    </div>
  )
}

export default Schedules