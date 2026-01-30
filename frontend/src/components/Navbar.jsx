import React, { useContext, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="items">
        {/* Logo Section */}
        <div onClick={() => { navigate("/"); setMenuOpen(false); }} className="logo-container">
          <img className="logo" src="/images/logo.png" alt="" />
          <h1 className="logo_title">MediMeet</h1>
        </div>

        {/* Desktop Menu (Original) */}
        <ul className="items1 desktop-menu">
          {[
            { to: "/", label: "HOME" },
            { to: "/about", label: "ABOUT" },
            { to: "/doctors", label: "ALL DOCTORS" },
            { to: "/blog", label: "BLOG" },
            { to: "/contact", label: "CONTACT" },
          ].map((item) => (
            <li className="tag" key={item.to}>
              <NavLink to={item.to} className={({ isActive }) => isActive ? "link active" : "link"}>
                {item.label}
                <hr className="hr" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          {token && userData ? (
            <div className="profile-container">
              <img className="profile" src={userData.image} alt="" />
              <button className="dropdown">▼</button>
              <div className="drop">
                <div className="dropdown-content">
                  <p onClick={() => { navigate("/my-profile"); setMenuOpen(false); }} className="item">My Profile</p>
                  <p onClick={() => { navigate("/my-appointments"); setMenuOpen(false); }} className="item">My appointments</p>
                  <p onClick={logout} className="item">Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button onClick={() => navigate("/login")} className="login-btn">Login</button>
          )}

          {/* Hamburger Icon for Mobile */}
          <img 
            src="/images/menu_icon.png" 
            className="menu-icon" 
            alt="Menu" 
            onClick={() => setMenuOpen(true)} 
          />
        </div>

        {/* --- Mobile Side Menu --- */}
        <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
          <div className="mobile-menu-header">
            <div className="logo-container">
              <img className="logo" src="/images/logo.png" alt="" />
              <h1 className="logo_title">MediMeet</h1>
            </div>
            <img 
              src="/images/cross_icon.png" 
              className="close-icon" 
              alt="Close" 
              onClick={() => setMenuOpen(false)} 
            />
          </div>
          <ul className="mobile-nav-links">
            <NavLink onClick={() => setMenuOpen(false)} to="/">HOME</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/doctors">ALL DOCTORS</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/about">ABOUT</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/blog">BLOG</NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="/contact">CONTACT</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;