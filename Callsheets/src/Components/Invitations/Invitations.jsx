import React,{useState} from 'react';
import "./Invitations.css";
import callsheet from '../../Assets/Images/Invitations/CallSheetImage.png'
import image from '../../Assets/Images/Invitations/ActorImage.png'
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

  return (
   <>
        <div className='invitations-main-cont'>

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
                    <button>{i.btn2}</button>
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