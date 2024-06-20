import React from 'react';
import './UpdateSchedule.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';

function UpdateSchedule() {
    const navigate=useNavigate()
    const goToSchedules=()=>{
        if(window.innerWidth<890){

            navigate('../view-schedule-now')
        }
        else{
            navigate('../view-schedule')
        }
        
    }

  return (
    <div className='update-schedule-main-cont'>
         <div className='update-schedule-header'>
            <Icon icon="ep:arrow-left-bold" className='update-schedule-header-icon' onClick={goToSchedules}/>
            <button className='update-schedule-button' onClick={goToSchedules}>Update</button>

        </div>
        <div className='update-schedule-cont'>
            <div className='update-schedule-input-title-cont'>
                <span>T</span>
                <input type='text' placeholder='Add Title'/>
            </div>

            <div className='update-schedule-date-time-cont'>
                <div className='update-schedule-date-time-header'>
                    <Icon icon="lets-icons:time-atack"   className='update-schedule-icon' />
                    <p>Select Date & Time</p>
                </div>
                <div className='update-schedule-date-time'>
                    <div className='update-schedule-start-time'>
                        <p>Tue,19 Jun 2024</p>
                        <p>7:00 pm</p>
                    </div>
                    <div className='update-schedule-end-time'>
                        <p>Tue,20 Jun 2024</p>
                        <p>8:00 pm</p>
                    </div>

                </div>

            </div>

            <div className='update-schedule-location-cont'>
            <Icon icon="mdi:location"  className='update-schedule-icon'  />
                <input type='text' placeholder='Add Location'/>

            </div>

            <div className='update-schedule-description-cont'>
            <Icon icon="material-symbols:description"  className='update-schedule-icon'  />
                <input type='text' placeholder='Add Description'/>

            </div>

            <div className='update-schedule-production-cont'>
            <Icon icon="ic:outline-person-4"   className='update-schedule-icon' />
                <input type='text' placeholder='Production House / Producer'/>

            </div>

        </div>

    </div>
  )
}

export default UpdateSchedule