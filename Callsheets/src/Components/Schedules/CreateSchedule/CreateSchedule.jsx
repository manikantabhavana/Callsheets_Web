import React from 'react';
import './CreateSchedule.css'
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';

function CreateSchedule() {
    const navigate=useNavigate()
    const goToSchedules=()=>{
        if(window.innerWidth<890){
            navigate('../schedules')
        }
        else{
            navigate('../')
        }
        
    }
  return (
    <div className='create-schedule-main-cont'>
        <div className='create-schedule-header'>
            <Icon icon="ep:arrow-left-bold" className='create-schedule-header-icon' onClick={goToSchedules}/>
            <button className='create-schedule-button' onClick={goToSchedules}>Create</button>

        </div>
        <div className='create-schedule-cont'>
            <div className='create-schedule-input-title-cont'>
                <span>T</span>
                <input type='text' placeholder='Add Title'/>
            </div>

            <div className='create-schedule-date-time-cont'>
                <div className='create-schedule-date-time-header'>
                    <Icon icon="lets-icons:time-atack"   className='create-schedule-icon' />
                    <p>Select Date & Time</p>
                </div>
                <div className='create-schedule-date-time'>
                    <div className='create-schedule-start-time'>
                        <p>Tue,19 Jun 2024</p>
                        <p>7:00 pm</p>
                    </div>
                    <div className='create-schedule-end-time'>
                        <p>Tue,20 Jun 2024</p>
                        <p>8:00 pm</p>
                    </div>

                </div>

            </div>

            <div className='create-schedule-location-cont'>
            <Icon icon="mdi:location"  className='create-schedule-icon'  />
                <input type='text' placeholder='Add Location'/>

            </div>

            <div className='create-schedule-description-cont'>
            <Icon icon="material-symbols:description"  className='create-schedule-icon'  />
                <input type='text' placeholder='Add Description'/>

            </div>

            <div className='create-schedule-production-cont'>
            <Icon icon="ic:outline-person-4"   className='create-schedule-icon' />
                <input type='text' placeholder='Production House / Producer'/>

            </div>

        </div>
    </div>
  )
}

export default CreateSchedule