import React,{useState} from 'react';
import "./Invitations.css";
import callsheet from '../../Assets/Images/Invitations/CallSheetImage.png'
import image from '../../Assets/Images/Invitations/ActorImage.png'
// import { Outlet } from 'react-router-dom';

function Invitations() {
  const invt=[{img:image,name:"Taeungh",role:"Model,Actor",time:"Monday-01.00-03.50",btn1:"Accept",btn2:"Cancel"},
  {img:image,name:"Taeungh",role:"Model,Actor",time:"Monday-01.00-03.50",btn1:"Accept",btn2:"Cancel"},
  {img:image,name:"Taeungh",role:"Model,Actor",time:"Monday-01.00-03.50",btn1:"Accept",btn2:"Cancel"},
  {img:image,name:"Taeungh",role:"Model,Actor",time:"Monday-01.00-03.50",btn1:"Accept",btn2:"Cancel"},
  {img:image,name:"Taeungh",role:"Model,Actor",time:"Monday-01.00-03.50",btn1:"Accept",btn2:"Cancel"},
  {img:image,name:"Taeungh",role:"Model,Actor",time:"Monday-01.00-03.50",btn1:"Accept",btn2:"Cancel"},
  

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
  return (
   <>
        <div className='invitations-main-cont'>
          <div className='invt-image'> <img src={callsheet} alt="callsheets" /></div>
          <div className='invt-items'> 
            <p className={`${isActiveBtn === null ? "active":""}`} onClick={()=>{handlebtn(null)}}>Received</p>
            <p className={`${isActiveBtn === 2 ? "active":""}`} onClick={()=>{handlebtn(2)}}>Requested</p>
            {/* <p className={`${isActiveBtn === 3 ? "active":""}`} onClick={()=>{handlebtn(3)}}>Accepted</p> */}
          </div>
           <div className='out-cont'>
           {invt.map((i)=>{
            return(
              <>
                <div className='received-main-cont'>
                <div className='container'>
                    <img src={i.img} alt="actor" />
                    <div className='content'>
                        <h2>{i.name}</h2>
                        <p>{i.role}</p>
                        <p>{i.time}</p>
                    </div>
                </div>
                <div className='btns'>
                    <button className='acpt'>{btnContent}</button>
                    <button className='cancel'>{i.btn2}</button>
                </div>
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