import React from 'react';
import './ViewSchedule.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';


function ViewSchedule() {
    const navigate=useNavigate()
    const goToSchedules=()=>{
        if(window.innerWidth<890){
            navigate('../schedules')
        }
        else{
            navigate('../')
        }
        
    }

    const editSchedules=()=>{

        if(window.innerWidth<890){
            navigate('../../update-schedule-now')
          }
          else{
            navigate('../update-schedule')
          }
       
    }
  return (
    <div className='view-schedule-main-cont'>
         <div className='view-schedule-header'>

            <Icon icon="ep:arrow-left-bold" className='view-schedule-header-icon' onClick={goToSchedules}/>
            <div className='view-schedule-edit-delete'>
                <Icon icon="mdi:pencil"   className='view-schedule-header-icon' onClick={editSchedules}  />
                <Icon icon="ic:baseline-delete"  className='view-schedule-header-icon'  />

            </div>
           
            

        </div>
        <div className='view-schedule-cont'>
            <div className='view-schedule-input-title-cont'> 
                <p>Test Title</p>
            </div>

            <div className='view-schedule-date-time-cont'>
              
               
                    <div className='view-schedule-start-time'>
                        <Icon icon="lets-icons:time-atack"   className='view-schedule-icon' />
                        <div>
                            <p>Starts At</p>
                            <p>Tue,19 Jun 2024 7:00 pm</p>
                        </div>
                        
                    </div>

                    <div className='view-schedule-end-time'>
                        <Icon icon="lets-icons:time-atack"   className='view-schedule-icon' />
                        <div>
                            <p>Ends At</p>
                            <p>Tue,20 Jun 2024 8:00 pm</p>
                        </div>
                    </div>

               

            </div>


            <div className='view-schedule-location-cont'>
                 <Icon icon="mdi:location"  className='view-schedule-icon'  />
                <div>
                    <p>Location</p>
                    <p>Hyderabad</p>
                </div>

            </div>

            <div className='view-schedule-description-cont'>
                <Icon icon="material-symbols:description"  className='view-schedule-icon'  />
                <div>
                    <p>Description</p>
                    <p>Lorem ipsum dolor sit amet, consectetur dolor sit amet, consecteturdolor sit amet, consecteturdolor sit amet, consectetur  This is a long paragraph of text that should be truncated after two lines adipisicing elit. Vero, earum?Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            <div className='view-schedule-production-cont'>
                <Icon icon="ic:outline-person-4"   className='view-schedule-icon' />
                <div>
                    <p>Production House / Producer</p>
                    <p>test productions</p>

                </div>
                

            </div>

        </div>

    </div>
  )
}

export default ViewSchedule