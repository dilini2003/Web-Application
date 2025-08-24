import React, { useState } from 'react'
import "./Login.css";

const Login = () => {

    const [state, setState] = useState('Admin')

  return (
    <from className='Login-Form'>
    <div className='modal-card'>
    <p className="Login-title"><span className='Login-name'> { state }</span> Login</p>
            <div>
            <p className="input-name">Email</p>
            <div className="input-container">
              <img className="input-icon" src="/images/User.png" alt="" />
              <input
                type="email" required
                placeholder="Enter your email"
                className="input"
              />
              </div>
            </div>
            <div>
            <p className="input-name">Password</p>
            <div className="input-container">
              <img className="input-icon" src="/images/Lock.png" alt="" />
              <input
                type="password" required
                placeholder="Enter your password"
                className="input"
              />
              </div>
            </div>
            <button className="primary-btn">Login</button>

            {
                state === 'Admin'
                ? <p className='text-link'>Doctor Login? <span onClick={()=>setState('Doctor')} className='link-text'>Click here</span></p>
                : <p className='text-link'>Admin Login? <span onClick={()=>setState('Admin')} className='link-text'>Click here</span></p>
            }
            </div>
      </from>
    
  )
}

export default Login
