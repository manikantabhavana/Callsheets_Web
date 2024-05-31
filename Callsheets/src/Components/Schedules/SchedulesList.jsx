import React,{useState} from 'react';
import "./SchedulesList.css"

function SchedulesList() {
  const [schedules,setSchedules]=useState([{time:'11:30',title:'shooting for OG Movie at Ramoji Film City'},
  {time:'4:30',title:'shooting for HHVM Movie at annapurna Film studios'}
  ])
  return (
    <div className='schedule-list-main-cont'>
        <h2>schedules</h2>
        <div className='schedule-list'>
            {
              schedules.map((schedule)=>(
                
                <div className='schedule'>
                  <div className='schedule-time'>{schedule.time}</div>
                  <div className='schedule-title'>
                    <p>{schedule.title}</p>
                  </div>

                </div>
                

              ))
            }
        </div>
    </div>
  )
}

export default SchedulesList