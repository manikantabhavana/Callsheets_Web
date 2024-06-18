import React from 'react';
import './Chat.css';
import { Icon } from '@iconify/react';
import Pawan from '../../Assets/Images/profiles/pawan.jpg';
import Trivikram from '../../Assets/Images/profiles/trivi.jpg';
import Prabhas from '../../Assets/Images/profiles/prabhas.jpg';
import { useNavigate } from 'react-router-dom';

function Chat() {
  const chats=[{name:'Trivikram',profile:Trivikram,lastMessage:'Hii',messageTime:'2'},
    {name:'Prabhas',profile:Prabhas,lastMessage:'Hello',messageTime:'2'},
    {name:'Trivikarm',profile:Trivikram,lastMessage:'Hii',messageTime:'1'},
    {name:'Prabhas',profile:Prabhas,lastMessage:'Hello',messageTime:'5'}
  ]

  const navigate=useNavigate()
    
  const goToSearch=()=>{
    navigate('../../search')
  }
  return (
  
    <div className='chat-main-cont'>
      <div className='chat-header-cont'>
          <div className='search-bar-chat'>
                <Icon icon="ri:search-line" />
                <input type='search' placeholder='search here' readOnly onClick={goToSearch}/>

            </div>
      </div>
      <div className='chat-list-cont'>
        { chats.map((chat)=>(
           <div className='chat-item'>

                <img src={chat.profile} />
                <div className='name-msg-time'>
                  <div className='name-time'>
                    <p className='chat-name'>{chat.name}</p>
                    <p className='chat-time'>{chat.messageTime} hours ago</p>
                  </div>
                    <p className='msg'>
                      {chat.lastMessage}
                    </p>

                </div>
              
          </div>

        ))
         
        }

      </div>

    </div>
  )
}

export default Chat