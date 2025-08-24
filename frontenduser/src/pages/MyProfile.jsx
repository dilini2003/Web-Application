import React, { useState } from "react";
import "./MyProfile.css";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: "/images/profile1.webp",
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, Colombo",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="profile-page">
      {isEdit ? (
        <div className="upload-containers">
        <img className="profile-image" src={userData.image} alt="" />
                  <label htmlFor="photo-upload" className="upload-labels">
                    <img
                      src="/images/upload_area.png"
                      alt="upload"
                      className="upload-icons"
                    />
                  </label>
                  <input
                    type="file"
                    id="photo-upload"
                    accept="image/*"
                    className="upload-input"
                    onChange={(e) => console.log(e.target.files[0])}
                  />
                </div>
      ) : (
        <img className="profile-image" src={userData.image} alt="" />
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
          <button className="save-button" onClick={()=> setIsEdit(false)}>Save information</button>
          : <button className="edit-button" onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  );
};

export default MyProfile;
