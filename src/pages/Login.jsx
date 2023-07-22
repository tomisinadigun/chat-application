import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>WeChat</span>
            <span className='title'>Register</span>
            <form action="">
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input style={{display:"none"}} type="file" id='file' />
                
                <button>Sign in</button>
            </form>
            <p>You don't have an account? signup</p>
        </div>
    </div>
  )
}

export default Login