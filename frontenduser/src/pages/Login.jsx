import React, { useState } from "react";
import "./Login.css";

const Login = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-card ${isLogin ? "login-size" : "signup-size"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        {isLogin ? (
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
                placeholder="Enter your email"
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
              />
            </div>
            <button className="primary-btn">Login</button>

            <p className="text-link">
              Don't have an account?{" "}
              <span className="link-text" onClick={() => setIsLogin(false)}>
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
                  />
                </div>
                <p className="input-name">Confirm Password</p>
                <div className="input-container">
                  <img className="input-icon" src="/images/Lock.png" alt="" />
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="input"
                  />
                </div>
                <p className="input-name">Date of Birth</p>
                <div className="input-container">
                  <img
                    className="input-icon"
                    src="/images/Calendar.png"
                    alt=""
                  />
                  <input type="date" className="input" />
                </div>
              </div>
              <div className="right-side">
                <div className="upload-container">
                  <label htmlFor="photo-upload" className="upload-label">
                    <img
                      src="/images/upload_area.png"
                      alt="upload"
                      className="upload-icon"
                    />
                    <p className="upload_photo">
                      Upload doctor <br />
                      picture
                    </p>
                  </label>
                  <input
                    type="file"
                    id="photo-upload"
                    accept="image/*"
                    className="upload-input"
                    onChange={(e) => console.log(e.target.files[0])}
                  />
                </div>
                <p className="input-name">Gender</p>
                <select className="input-gender">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <p className="input-name">Contact Number</p>
                <div className="input-container">
                  <img className="input-icon" src="/images/Phone.png" alt="" />
                  <input
                    type="text"
                    placeholder="Enter your contact number"
                    className="input"
                  />
                </div>
                <p className="input-name">Email</p>
                <div className="input-container">
                  <img className="input-icon" src="/images/User.png" alt="" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input"
                  />
                </div>
              </div>
            </div>
            <p className="input-name">Address</p>
            <div className="input-container">
              <img
                className="input-icon"
                src="/images/location_on.png"
                alt=""
              />
              <textarea
                placeholder="Enter your address"
                className="inputs"
              ></textarea>
            </div>
            <p className="terms">
              <input type="checkbox" />I agree to the{" "}
              <span className="term_link">Terms and conditions </span> and{" "}
              <span className="term_link"> Privacy policy</span>
            </p>

            <button className="primary-btn">Create Account</button>

            <p className="text-links">
              Already have an account?{" "}
              <span className="link-text" onClick={() => setIsLogin(true)}>
                Login
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
