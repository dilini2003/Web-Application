import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import "./DoctorList.css";

const DoctorList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } =
    useContext(AdminContext);

  // When admin token changes fetch doctors
  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);
  return (
    <div className="doctor-list-page">
      <h1 className="doctor-list-title">All Doctors</h1>
      <div className="doctor-list">
        {doctors.map((item, index) => (
          <div className="doctor-card" key={index}>
            <div className="image-box">
              <img className="doctor-image" src={item.image} alt="" />
            </div>
            <div className="doctor-info">
              <p className="doctor-name">{item.name}</p>
              <p className="doctor-speciality">{item.speciality}</p>

              <div className="doctor-status">
                <input
                  onChange={() => changeAvailability(item._id)}
                  type="checkbox"
                  checked={item.available}
                />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
