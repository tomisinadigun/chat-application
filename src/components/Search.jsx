import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user' />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/17055104/pexels-photo-17055104/free-photo-of-portrait-of-a-tattooed-brunette-wearing-a-green-dress.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        <div className="userChatInfo">
          <span className="displayName">Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search