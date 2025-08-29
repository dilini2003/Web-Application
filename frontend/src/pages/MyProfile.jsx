import React, { useContext, useState } from "react";
import "./MyProfile.css";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  
  const {userData,setUserData , token,loadUserProfileData} = useContext(AppContext)
  
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false)
  const updateUserProfileData = async () =>{
    try {
      const formData = new FormData()

      formData.append('name',userData.name)
      formData.append('phone',userData.phone)
      formData.append('address',JSON.stringify(userData.address))
      formData.append('gender',userData.gender)
      formData.append('dob',userData.dob)

      image && formData.append('image', image)

      const {data} =await axios.post('http://localhost:4000/api/user/update-profile', formData,{headers :{token}})

      if(data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
             
    }
  }
  if (!userData) {
    return <div className="profile-page">Loading profile...</div>;
  }

  return userData && (
    <div className="profile-page">
      {
        isEdit ? (<label htmlFor="image">
          <div className="upload-image1">
            <img className="upload-image2" src={image ? URL.createObjectURL(image) : userData.image} alt=""/>
            <img className="upload-image3" src={image ? '' : "/images/upload_area.png"} alt=""/>
          </div>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden />
        </label>
        ): (<img className="upload-image4" src={userData.image} alt=""/>
      )}
      {isEdit ? (
        <input className="profile-name-input"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="profile-name">{userData.name}</p>
      )}
      <hr className="profile-section-divider" />
      <div className="section-contact-info">
        <p className="profile-section-title">CONTACT INFORMATION</p>
        <div className="info-group">
          <div className="info-row">
          <p  className="info-label">Email id:</p>
          <p className="info-value-blue">{userData.email}</p>
          </div>
          <div className="info-row">
          <p className="info-label">Phone:</p>
          {isEdit ? 
            <input
              type="text" className="input-field"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
           : <p className="info-value-blue">{userData.phone}</p>
          }
          </div>
          <div className="info-row">
          <p className="info-label">Address:</p>
          {isEdit ? 
          <p className="address-inputs">
            <input className="input-field"
              type="text"
              onChange={(e) =>
                setUserData(prev => ({ ...prev, address: {...prev.address, line1: e.target.value} }))
              } value={userData.address.line1}
            />
            <br/>
            <input type="text" className="input-field" onChange={(e) =>
                setUserData(prev => ({ ...prev, address: {...prev.address, line2: e.target.value} }))
              } value={userData.address.line2} />
            </p>
           : <p  className="info-value">{userData.address.line1}
           <br/>
           {userData.address.line2}
           </p>
          }
          </div>
        </div>
      </div>
      <div className="section basic-info">
        <p className="profile-section-title">BASIC INFORMATION</p>
        <div className="info-group">
          <div className="info-row">
          <p className="info-label">Gender:</p>
          {isEdit ?  
          <select className="input-field" onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}>
            <option value="Not select">Not select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          : 
        <p className="info-value">{userData.gender}</p>
      }
      </div>
      <div className="info-row">
      <p className="info-label">Birthday:</p>
      {
        isEdit 
        ? <input className="input-field" type="date" onChange={(e) => setUserData(prev =>({...prev,dob:e.target.value}))} value={userData.dob}/>
        :<p className="info-value">{userData.dob}</p>
      }
      </div>
        </div>
      </div>
      <div className="action-buttons">
        {
          isEdit ?
          <button className="save-button" onClick={updateUserProfileData}>Save information</button>
          : <button className="edit-button" onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  );
};

export default MyProfile;
