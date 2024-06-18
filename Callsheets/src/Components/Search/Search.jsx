import React from 'react';
import './Search.css';
import { Icon } from '@iconify/react';
import searchVector from '../../Assets/Images/gifs/searching-unscreen.gif';
import { useNavigate } from 'react-router-dom';


function Search() {
    const navigate = useNavigate();
    const goBack=()=>{
        navigate('../../schedules')
    }
  return (
    <div className='search-page-main-cont'>
        <div className='Search-bar-cont-page'>

             <Icon icon="solar:arrow-left-outline"  onClick={goBack}/>
             <p>Search</p>
            
        </div>
        <div className='search-bar-page'>
            <Icon icon="ri:search-line" />
            <input type='search' placeholder='search here'/>

        </div>
        <div className='search-result-cont'>
            <img src={searchVector}/>
           

        </div>
        
    </div>
  )
}

export default Search