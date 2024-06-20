import React,{useState} from 'react';
import "./SchedulesList.css"
import { useNavigate } from 'react-router-dom';

function SchedulesList() {
  const navigate=useNavigate();

  const [schedules,setSchedules]=useState([{startTime:'Mon,18 jun 24 11:30 PM',endTime:'Mon,18 jun 24 12:30 AM',title:'shooting for OG Movie at Ramoji Film City'},
  {startTime:'Mon,18 jun 24 11:30 PM',endTime:'Mon,18 jun 24 12:30 AM',title:'shooting for HHVM Movie at annapurna Film studios'}
  ]);

  const createSchedule=()=>{

      if(window.innerWidth<890){
        navigate('../create-schedule-now')
      }
      else{
        navigate('create-schedule')
      }
      
  };

  const viewSchedule=()=>{
    if(window.innerWidth<890){
      navigate('../view-schedule-now')
    }
    else{
      navigate('view-schedule')
    }
  }


  return (
    <div className='schedule-list-main-cont'>
        
        <div className='schedule-list'>
            {
              schedules.map((schedule)=>(
                
                <div className='schedule' onClick={viewSchedule}>
                  <div className='schedule-time-cont'>
                    <div className='schedule-start-time'>{schedule.startTime}</div>
                    <div className='schedule-end-time'>{schedule.endTime}</div>
                  </div>
                  <div className='schedule-title'>
                    <p>{schedule.title}</p>
                  </div>

                </div>
                

              ))
            }
        </div>

        <div className='add-schedule-cont' onClick={createSchedule}>
            <p> Schedule +</p>
        </div>
           

          
         
    </div>
  )
}

export default SchedulesList