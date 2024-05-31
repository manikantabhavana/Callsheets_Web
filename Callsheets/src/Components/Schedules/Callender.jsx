import React, { useState } from 'react';
import "./Callender.css"
import {Icon} from "@iconify/react"

function Callender() {
    const [dates,setDates]=useState([])

  return (
    <>
            <div className='schedules-calender-cont-side-arrows'>
                    <Icon icon="iconamoon:arrow-left-2"  />
                    <p>26 August 2024</p>
                    <Icon icon="iconamoon:arrow-right-2" />

             </div>

        <div className='schedules-dates-cont'>
            {
            dates.forEach(()=>(
                <div></div>
            ))
            }

        </div>

      

    </>


  )
}

export default Callender