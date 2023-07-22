import React from 'react'
import AddImage from "../img/add-image-1.svg"
import More from "../img/more.svg"
import Video from "../img/video.svg"
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src={AddImage} alt="" />
          <img src={Video} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat