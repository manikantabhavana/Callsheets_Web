import React ,{ useState }from 'react';

import './HeaderBar.css';
import { Icon } from '@iconify/react';
import ProfilePhoto from "../../../Assets/Images/SignupBg.png";
import { useNavigate } from 'react-router-dom';
import Notifications from '../../Notifications/Notifications';

function HeaderBar() {
  const navigate = useNavigate()
  const [showDateInput, setShowDateInput] = useState(false);
  const [showNotifications,setShowNotifications]=useState(false);

  const handleDateIconClick = () => {
    
    setShowDateInput(true);
    // Delay focus to allow the input to be visible
    setTimeout(() => {
      document.getElementById('date-input').focus();
    }, 0);
  };

  const goToSearch=()=>{
    navigate('search')
  };
  const goToNotifications=()=>{
    if(showNotifications===false){
      setShowNotifications(true)
    }
    else{
      setShowNotifications(false)
    }
    
  }


  return (
    <div className='header-bar-main-container'>

        <div className='search-bar-cont'>
            <Icon icon="ri:search-line" className='search-icon-at-bar'/>
            <input type='search'
             placeholder='shedules, artists'
             onClick={goToSearch}
             />

        </div>

        <div className='header-date-icon-cont'>
        

            <span className='date-icon-at-bar' onClick={handleDateIconClick}></span>
            {showDateInput && <input type="date" id="date-input" />}
            

        </div>
        <Icon icon="mdi:bell-notification" className='bell-icon-at-bar' onClick={goToNotifications}/>

       
          
        <div className='user-main-cont-at-bar'>
                
                <img src={ProfilePhoto} className='user-img-at-bar' alt='user-profile'/>
                <div className='user-details-cont'>
                    <p className='user-name-at-bar'>Pawan Kalyan konidela <br/>
                    <span className='artist-type'>Actor</span></p>
                </div>
        </div>
        <div className={`notifications-at-bar ${showNotifications==true?'active':''}`}>
            <Notifications/>
        </div>


    </div>
  )
}

export default HeaderBar