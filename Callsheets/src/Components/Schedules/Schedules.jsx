import React, { useState } from 'react';
import './Schedules.css';
import { Icon } from '@iconify/react';
import SchedulesList from './SchedulesList';
import Callender from './Callender';
import Logo from "../../Assets/Images/logo.jpg";

function Schedules() {
  const [username,setUsername]=useState('Pawan Kalyan');
  const [dates,setDates]=useState([]);


  return (
    <div className='schedules-main-cont'>
      <div className='schedules-banner-cont'>
        <h2>Hello {username}!</h2>
        <p>My Schedules</p>
      </div>
      <div className='schedules-calender-main-cont'>

        <p className='schedules-calender-main-cont-date'>Date</p>
        <div className='schedules-calender-main-cont-arrows'>
           <Icon icon="fe:arrow-up" className='schedules-calender-main-cont-arrow' />
           <Icon icon="fe:arrow-down" className='schedules-calender-main-cont-arrow' />
        </div>


        <div className='schedules-calender-cont'>
          <Callender/>
        </div>

       

      </div>

      <div className='schedules-cont'>
          <SchedulesList/>
        </div>
    </div>
  )
}

export default Schedules