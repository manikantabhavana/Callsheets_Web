import React from 'react'
import Prabhas from '../../Assets/Images/profiles/prabhas.jpg';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
function Chatting() {

    const messages=[{by:'you',msg:'hi'},{by:'Trivikram',msg:'hi'},{by:'you',msg:'hello'},{by:'you',msg:'hello jejn jdisid jsdosd iidijsdj s jsjs jsjjdsk jsisn jjskjkss jksjkjksd jjdhkjka jjdsd'},{by:'Trivikram',msg:'ok'},
        {by:'Trivikarm',msg:'jkjd jsdkjksD wdiwjiwnd jdishidsdijd jid kjdjks jkdjlskkduwkjjdsld kjkdjksd'},{by:'you',msg:'hi'},{by:'Trivikram',msg:'hi'},{by:'you',msg:'hi'},
        {by:'Trivikarm',msg:'jkjd jsdkjksD wdiwjiwnd jdishidsdijd jid kjdjks jkdjlskkduwkjjdsld kjkdjksaad'},{by:'you',msg:'hi'},{by:'Trivikram',msg:'hi'},{by:'you',msg:'hi'},
      ]


      const navigate=useNavigate()
      const goBack=()=>{
        navigate('../schedules/chat')
      }
  return (
    <div className='chating-main-cont-mob'>
          <div className='chating-header-bar'>
              <Icon icon="ep:arrow-left-bold" className='chating-header-icon' onClick={goBack}/>
              <img src={Prabhas} />
              <p className='chat-name'>{'Prabhas'}</p>
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
  )
}

export default Chatting