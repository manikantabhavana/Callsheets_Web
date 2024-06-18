import React, { useState } from 'react';
import './Schedules.css';
import { Icon } from '@iconify/react';
import SchedulesList from './SchedulesList';
import Callender from './Callender';
import Logo from "../../Assets/Images/logo.jpg";

function Schedules() {
  const [username,setUsername]=useState('Pawan Kalyan');
  const [dates,setDates]=useState([]);
  const [filter,setFilter]=useState('Today');
  


  


  return (
    <div className='schedules-main-cont'>

      <div className='schedules-main-left-cont'>
          <div className='schedules-banner-cont'>
            <h2>Hello {username}!</h2>
            <p>My Schedules</p>
          </div>
          <div className='schedules-calender-main-cont'>


              <div className='schedules-calender-header'>

                <p className='schedules-calender-cont-date'>Schedules</p>
                <div className='schedules-calender-filter-cont'>
                  <span >{filter}</span>
                
                  <Icon icon="ep:menu"  className='schedules-calender-filter-icon' />
                  
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