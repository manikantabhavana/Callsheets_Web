import React, { useState,useEffect } from 'react';
import "./Callender.css"
import {Icon} from "@iconify/react"

function Callender() {
    const [dates,setDates]=useState([{day:'Sun',date:'25'},{day:'Mon',date:'26'},{day:'Tue',date:'27'},{day:'Wed',date:'28'}
      ,{day:'Thu',date:'29'},{day:'Fri',date:'30'},{day:'Sat',date:'31'}
    ]);
    const [selectedDate,setSelectedDate]=useState(29);
    const [isMobileDevice, setIsMobileDevice] = useState(false); 

  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobileDevice(window.innerWidth <= 890);
      setDates(dates.slice(0,5))
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

    const toDate=(date)=>{
      setSelectedDate(date)

    }

  return (
    <>

      <div className='schedules-calender'>
            <div className='schedules-calender-cont-side-arrows'>
                    <Icon icon="iconamoon:arrow-left-2"  className='schedules-calender-cont-side-arrow' />
                    <p>26 August 2024</p>
                    <Icon icon="iconamoon:arrow-right-2" className='schedules-calender-cont-side-arrow' />
             </div>

        <div className='schedules-dates-cont'>
            {
            dates.map((date)=>(
                <div className={`schedule-date ${date.date==selectedDate?'active':''}`} onClick={()=>{toDate(date.date)}}>
                  <p>{date.day}</p>
                  <p>{date.date}</p>
                  <div></div>

                </div>
            ))
            }

        </div>


        </div>

      

    </>


  )
}

export default Callender