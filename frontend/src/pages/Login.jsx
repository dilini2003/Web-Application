import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { token, setToken, loadUserProfileData, backendUrl } = useContext(AppContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (isLogin === "Login") {
        const { data } = await axios.post(
          backendUrl + "/api/user/login",
          { password, email }
        );
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          loadUserProfileData();
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(
          backendUrl + "/api/user/register",
          { name, password, email }
        );
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          loadUserProfileData();
          toast.success(data.message);
        } else {
          console.log(data.message);
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    if (token && token !== "false") {
      navigate("/");
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className="modal-overlay">
      <div
        className={`modal-card ${isLogin ? "login-size" : "signup-size"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {isLogin === "Login" ? (
          <>
            <h2 className="Login-title">Login</h2>
            <p className="description">
              Welcome Back! Please enter your credentials
            </p>
            <p className="input-name">Email</p>
            <div className="input-container">
              <img className="input-icon" src="/images/User.png" alt="" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input"
              />
            </div>
            <p className="input-name">Password</p>
            <div className="input-container">
              <img className="input-icon" src="/images/Lock.png" alt="" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="input"
              />
            </div>
            <button type="submit" className="primary-btn">
              Login
            </button>

            <p className="text-link">
              Don't have an account?{" "}
              <span className="link-text" onClick={() => setIsLogin("SignUp")}>
                SignUp
              </span>
            </p>
          </>
        ) : (
          <>
            <h2 className="Login-title">Patient SignUp</h2>
            <p className="description">
              Create Your Account to access healthcare services
            </p>
            <div className="sides">
              <div className="left-side">
                <p className="input-name">Full Name</p>
                <div className="input-container">
                  <img className="input-icon" src="/images/User.png" alt="" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="input"
                  />
                </div>
                <p className="input-name">Password</p>
                <div className="input-container">
                  <img className="input-icon" src="/images/Lock.png" alt="" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <p className="input-name">Email</p>
                <div className="input-container">
                  <img className="input-icon" src="/images/User.png" alt="" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input"
                  />
                </div>
              </div>
            </div>

            <p className="terms">
              <input type="checkbox" />I agree to the
              <span className="term_link">Terms and conditions </span> and
              <span className="term_link"> Privacy policy</span>
            </p>

            <button type="submit" className="primary-btn">
              Create Account
            </button>

            <p className="text-link">
              Already have an account?{" "}
              <span className="link-text" onClick={() => setIsLogin("Login")}>
                Login
              </span>
            </p>
          </>
        )}
      </div>
    </form>
  );
};

export default Login;
