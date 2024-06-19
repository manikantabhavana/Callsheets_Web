import React,{useState} from 'react';
import "./Invitations.css";
import { Icon } from '@iconify/react';
import webimage from '../../Assets/Images/Invitations/InvtMblBg.png'
import image from '../../Assets/Images/Invitations/ActorImage.png'
import Search from '../Search/Search';
import { useNavigate } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

function Invitations() {
  const invt=[{img:image,name:"Taeungh",btn2:"Cancel"},
  {img:image,name:"Taeungh",btn2:"Cancel"},
  {img:image,name:"Taeungh",btn2:"Withdraw"},
  {img:image,name:"Taeungh",btn2:"Cancel"},
  {img:image,name:"Taeungh",btn2:"Cancel"},
  {img:image,name:"Taeungh",btn2:"Cancel"},
  {img:image,name:"vvv",btn2:"Cancel"},
  {img:image,name:"Taeungh",btn2:"Cancel"},
  {img:image,name:"Taeungh",btn2:"Cancel"},
  {img:image,name:"Taeungh",btn2:"Cancel"},
  {img:image,name:"Taeungh",btn2:"Cancel"},
  {img:image,name:"vvv",btn2:"Cancel"},
  {img:image,name:"Taeungh",btn2:"Cancel"}

  ]
  const [isActiveBtn,setIsActiveBtn]=useState(null);
  const [btnContent,setBtnContent]=useState('Accept')

  
  const handlebtn=(index)=>{
    setIsActiveBtn(index)
    switch (index){
      case 1:setBtnContent("Accept");
      break;
      case 2: setBtnContent("Requested");
      break;
      // case 3: setBtnContent("Accepted");
      // break;
      default:
        setBtnContent("Accept")
    }
  }
 const navigate=useNavigate()
    
  const goToSearch=()=>{
    navigate('../../search')
  }
  return (
   <>
        <div className='invitations-main-cont'>
            {/* <img src={webimage} alt="image" className='web-image'/> */}
            {/* <Search/> */}
            <div className='chat-header-cont'>
          <div className='search-bar-chat'>
                <Icon icon="ri:search-line" />
                <input type='search' placeholder='search here' readOnly onClick={goToSearch}/>

            </div>
      </div>

          <div className='invt-items'> 
            <p className={`${isActiveBtn === null ? "active":""}`} onClick={()=>{handlebtn(null)}}>Received</p>
            <p className={`${isActiveBtn === 2 ? "active":""}`} onClick={()=>{handlebtn(2)}}>Requested</p>
          </div>
            <div className='request-container'>
              {invt.map((i)=>{
                return(
                  <>
                    <div className='request-items'>
                    <img src={i.img} alt="img" />
                    <p>Callsheet access request sent to <span>{i.name}</span></p>
                    <button className='req-btn'>{i.btn2}</button>
                    </div>
                  
                  </>
                )
              })}
              
            </div>
        </div>
   </>
  )
}

export default Invitations