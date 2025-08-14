import React, { useState } from 'react';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false)
  const [token,setToken] = useState(true)

  return (
    <div className="items">
      <div className="logo-container">
        <img className="logo" src="/images/logo.png" alt="" />
        <h1 className="title">MediMeet</h1>
      </div>

      <ul className="items1">
        {[
          { to: '/', label: 'HOME' },
          { to: '/about', label: 'ABOUT' },
          { to: '/doctors', label: 'ALL DOCTORS' },
          { to: '/blog', label: 'BLOG' },
          { to: '/contact', label: 'CONTACT' },
        ].map((item) => (
          <li className="tag" key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              {item.label}
              <hr className="hr" />
            </NavLink>
          </li>
        ))}
      </ul>

      <div>
        {
            token 
            ? <div className='profile-container'>
                <img className="profile" src="images/profile1.webp" alt=''/>
                <button className='dropdown'>▼</button>
                <div className='drop'>
                    <div className='dropdown-content'>
                        <p onClick={()=>navigate('/my-profile')} className='item'>My Profile</p>
                        <p onClick={()=>navigate('/my-appointments')} className='item'>My appointments</p>
                        <p onClick={()=>setToken(false)} className='item'>Logout</p>
                    </div>
                </div>
            </div>
            :<button onClick={()=>navigate('/login')} className="login-btn">Login</button>
        }
      </div>
    </div>
  );
};

export default Navbar