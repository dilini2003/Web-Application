import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);

  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    if (aToken) {
      setAToken("");
      localStorage.removeItem("aToken");
    }

    if (dToken) {
      setDToken("");
      localStorage.removeItem("dToken");
    }
  };
  return (
    <div className="Navbar-form">
      <div className="Navbar-card">
        <div className="logo-container">
          <img className="logo" src="/images/logo.png" alt="" />
          <h1 className="logo_title">MediMeet</h1>
        </div>
        <p className="Navbar-token"> {aToken ? "Admin" : "Doctor"} </p>
      </div>
      <button onClick={logout} className="Navbar-logout-button">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
