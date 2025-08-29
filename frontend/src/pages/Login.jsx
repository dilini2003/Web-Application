import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import {useNavigate } from 'react-router-dom'

const Login = ({ onClose }) => {
  const  {backendUrl, token, setToken ,loadUserProfileData} = useContext(AppContext)
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState('Login');
  const [email, setEmail] = useState('')
  const [image, setImage] = useState(false);
  const [password,setPassword] = useState('')
  const [name, setName] = useState('')
const [confirmPassword, setConfirmPassword] = useState('');
const [dob, setDob] = useState('Not selected');
const [gender, setGender] = useState('Not selected');
const [contact, setContact] = useState('');
const [address, setAddress] = useState('');



  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
       if(isLogin === 'Login') {
         const {data} = await axios.post('http://localhost:4000/api/user/login', {password,email})
         if(data.success){
           localStorage.setItem('token',data.token)
           setToken(data.token)
           loadUserProfileData()
         } else {
           toast.error(data.message)
         }
       } else {
    //     if(!image) {
    //       return toast.error('Image Not Selected')
    //                 }
        
    //     const formData = new FormData();
    // formData.append('name', name);
    // formData.append('email', email);
    // formData.append('password', password);
    // formData.append('image', image);
    // formData.append('confirmPassword', confirmPassword);
    // formData.append('dob', dob);
    // formData.append('gender', gender);
    // formData.append('contact', contact);
    // formData.append('address', address);

    // formData.forEach((value,key) =>{
    //             console.log(`${key} : ${value}`)
    //         })

    const { data } = await axios.post('http://localhost:4000/api/user/register', {name,password,email}
    //   backendUrl + '/api/user/register',
    //   formData,
    //   { headers: { 'Content-Type': 'multipart/form-data' } }
    );
        if(data.success){
          console.log("✅ Login token:", data.token);
           localStorage.setItem('token',data.token)
           setToken(data.token)
           loadUserProfileData()
    //       toast.success(data.message)
         
         } else {
          console.log("❌ Login failed:", data.message);
           toast.error(data.message)
         }
       }
     } catch (error) {
       toast.error(error.message)
       console.log(error)

     }
  }

 useEffect(() =>{
  if (token && token !== "false") {
    navigate('/')
  }
}, [token])


  return (
    <form onSubmit={onSubmitHandler} className="modal-overlay">
      <div
        className={`modal-card ${isLogin ? "login-size" : "signup-size"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {isLogin === 'Login' ? (
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
            <button type='submit' className="primary-btn">Login</button>

            <p className="text-link">
              Don't have an account?{" "}
              <span className="link-text" onClick={() => setIsLogin('SignUp')}>
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
                  <img className="input-icon"  src="/images/User.png" alt="" />
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
                  <img className="input-icon"  src="/images/User.png" alt="" />
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
              <input type="checkbox" />I agree to the{" "}
              <span className="term_link">Terms and conditions </span> and{" "}
              <span className="term_link"> Privacy policy</span>
            </p>

            <button type='submit' className="primary-btn">Create Account</button>

            <p className="text-link">
              Already have an account?{" "}
              <span className="link-text" onClick={() => setIsLogin('Login')}>
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
