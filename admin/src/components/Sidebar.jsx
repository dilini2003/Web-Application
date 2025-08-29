import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { DoctorContext } from "../context/DoctorContext";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return (
    <div className="sidebar">
      {aToken && (
        <ul className="sidebar-menu">
          <hr className="sidebar-divider" />
          <div className="sidebar-header">
            <img
              className="sidebar-icon"
              src="/images/dashboard-icon.png"
              alt=""
            />
            <p className="sidebar-title">Dashboard</p>
          </div>
          <hr className="sidebar-divider" />
          <NavLink
            className={({ isActive }) =>
              `sidebar-item ${isActive ? "active" : ""}`
            }
            to={"/all-appointments"}
          >
            <img
              className="sidebar-icon"
              src="/images/appointment-icon.png"
              alt=""
            />
            <p className="sidebar-text">Appointments</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `sidebar-item ${isActive ? "active" : ""}`
            }
            to={"/add-doctor"}
          >
            <img
              className="sidebar-icon"
              src="/images/add-doctor-icon.png"
              alt=""
            />
            <p className="sidebar-text">Add Doctor</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `sidebar-item ${isActive ? "active" : ""}`
            }
            to={"/doctor-list"}
          >
            <img
              className="sidebar-icon"
              src="/images/doctor-icon.png"
              alt=""
            />
            <p className="sidebar-text">Doctor List</p>
          </NavLink>
        </ul>
      )}
      {dToken && (
        <ul className="sidebar-menu">
          <hr className="sidebar-divider" />
          <div className="sidebar-header">
            <img
              className="sidebar-icon"
              src="/images/dashboard-icon.png"
              alt=""
            />
            <p className="sidebar-title">Dashboard</p>
          </div>
          <hr className="sidebar-divider" />
          <NavLink
            className={({ isActive }) =>
              `sidebar-item ${isActive ? "active" : ""}`
            }
            to={"/doctor-appointments"}
          >
            <img
              className="sidebar-icon"
              src="/images/appointment-icon.png"
              alt=""
            />
            <p className="sidebar-text">Appointments</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `sidebar-item ${isActive ? "active" : ""}`
            }
            to={"/doctor-profile"}
          >
            <img
              className="sidebar-icon"
              src="/images/doctor-icon.png"
              alt=""
            />
            <p className="sidebar-text">Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
