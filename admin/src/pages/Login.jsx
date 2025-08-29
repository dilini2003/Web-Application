import React, { useContext, useState } from "react";
import "./Login.css";
import axios from "axios";
import { toast } from "react-toastify";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendUrl}/api/doctor/login`, {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("dToken", data.token);
          setDToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {}
  };

  return (
    <form onSubmit={onSubmitHandler} className="Login-Form">
      <div className="modal-card">
        <p className="Login-title">
          <span className="Login-name"> {state}</span> Login
        </p>
        <div>
          <p className="input-name">Email</p>
          <div className="input-container">
            <img className="input-icon" src="/images/User.png" alt="" />
            <input
              type="email"
              required
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="input"
            />
          </div>
        </div>
        <div>
          <p className="input-name">Password</p>
          <div className="input-container">
            <img className="input-icon" src="/images/Lock.png" alt="" />
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter your password"
              className="input"
            />
          </div>
        </div>
        <button className="primary-btn"> Login </button>

        {state === "Admin" ? (
          <p className="text-link">
            Doctor Login?{" "}
            <span onClick={() => setState("Doctor")} className="link-text">
              Click here
            </span>
          </p>
        ) : (
          <p className="text-link">
            Admin Login?{" "}
            <span onClick={() => setState("Admin")} className="link-text">
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
