import React, { useState } from 'react';
import './Chat.css';
import { Icon } from '@iconify/react';
import Pawan from '../../Assets/Images/profiles/pawan.jpg';
import Trivikram from '../../Assets/Images/profiles/trivi.jpg';
import Prabhas from '../../Assets/Images/profiles/prabhas.jpg';
import { useNavigate } from 'react-router-dom';


function Chat() {

  const navigate=useNavigate();

  const chats=[{name:'Trivikram',profile:Trivikram,lastMessage:'Hii',messageTime:'2'},
    {name:'Prabhas',profile:Prabhas,lastMessage:'Hello',messageTime:'2'},
    {name:'Trivikarm',profile:Trivikram,lastMessage:'Hii',messageTime:'1'},
    {name:'Prabhas',profile:Prabhas,lastMessage:'Hello',messageTime:'5'},
    {name:'Prabhas',profile:Prabhas,lastMessage:'Hello',messageTime:'2'},
    {name:'Trivikarm',profile:Trivikram,lastMessage:'Hii',messageTime:'1'},
    {name:'Prabhas',profile:Prabhas,lastMessage:'Hello',messageTime:'5'},
    {name:'Prabhas',profile:Prabhas,lastMessage:'Hello',messageTime:'2'},
    {name:'Trivikarm',profile:Trivikram,lastMessage:'Hii',messageTime:'1'},
    {name:'Prabhas',profile:Prabhas,lastMessage:'Hello',messageTime:'5'}
  ];

  const messages=[{by:'you',msg:'hi'},{by:'Trivikram',msg:'hi'},{by:'you',msg:'hello'},{by:'you',msg:'hello jejn jdisid jsdosd iidijsdj s jsjs jsjjdsk jsisn jjskjkss jksjkjksd jjdhkjka jjdsd'},{by:'Trivikram',msg:'ok'},
    {by:'Trivikarm',msg:'jkjd jsdkjksD wdiwjiwnd jdishidsdijd jid kjdjks jkdjlskkduwkjjdsld kjkdjksd'},{by:'you',msg:'hi'},{by:'Trivikram',msg:'hi'},{by:'you',msg:'hi'},
    {by:'Trivikarm',msg:'jkjd jsdkjksD wdiwjiwnd jdishidsdijd jid kjdjks jkdjlskkduwkjjdsld kjkdjksaad'},{by:'you',msg:'hi'},{by:'Trivikram',msg:'hi'},{by:'you',msg:'hi'},
  ]

  const [profile,setProfile]=useState(chats[0].profile)
  const [name,setName]=useState(chats[0].name)

    
  const goToSearch=()=>{
    navigate('../../search')
  }

  const goToChat=()=>{
    if(window.innerWidth<890){
        navigate('chat-now')
    }
    else{

    }
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
        <div className='chats-header'>
          chats

        </div>
        { chats.map((chat)=>(
           <div className='chat-item' onClick={goToChat}>

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
      <div className='chating-main-cont'>
          <div className='chating-header-bar'>
              <Icon icon="ep:arrow-left-bold" className='chating-header-icon' />
              <img src={profile} />
              <p className='chat-name'>{name}</p>
          </div>
          <div className='chating-cont'>
            {
              messages.map((message)=>(
                <div className={`message ${message.by==='you' ? 'you':''}`}>{message.msg}</div>
              ))
            }
            <div className='message-input-cont'>
              <div className='message-input'>
                  <input type='text'/>
                  <Icon icon="material-symbols:send"  className='message-send-icon' />
              </div>
              
            </div>


          </div>
          

          


      </div>
        

    </div>
  )
}

export default Chat