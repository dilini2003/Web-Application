import React, { useContext, useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <>
      <div className="items">
        <div onClick={() => navigate("/")} className="logo-container">
          <img className="logo" src="/images/logo.png" alt="" />
          <h1 className="logo_title">MediMeet</h1>
        </div>

        <ul className="items1">
          {[
            { to: "/", label: "HOME" },
            { to: "/about", label: "ABOUT" },
            { to: "/doctors", label: "ALL DOCTORS" },
            { to: "/blog", label: "BLOG" },
            { to: "/contact", label: "CONTACT" },
          ].map((item) => (
            <li className="tag" key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                {item.label}
                <hr className="hr" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div>
          {token && userData ? (
            <div className="profile-container">
              <img className="profile" src={userData.image} alt="" />
              <button className="dropdown">▼</button>
              <div className="drop">
                <div className="dropdown-content">
                  <p onClick={() => navigate("/my-profile")} className="item">
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/my-appointments")}
                    className="item"
                  >
                    My appointments
                  </p>
                  <p onClick={logout} className="item">
                    Logout
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <button onClick={() => navigate("/login")} className="login-btn">
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
