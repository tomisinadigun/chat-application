import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">WeChat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/17055104/pexels-photo-17055104/free-photo-of-portrait-of-a-tattooed-brunette-wearing-a-green-dress.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar