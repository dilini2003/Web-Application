import React from "react";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { useEffect } from "react";
import "./AllAppointment.css";

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments, cancelAppointment } =
    useContext(AdminContext);

  // When admin token changes fetch appointments from bakend
  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);
  return (
    <div className="AllAppointment-page">
      <p className="AllAppointment-title">All Appointment</p>
      <div className="AllAppointment-topics">
        <div className="AllAppointment-topic">
          <p>patient</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>fees</p>
          <p>Actions</p>
        </div>
        {appointments.slice().reverse().map((item, index) => {
          const docData = JSON.parse(item.docData);
          const userData = JSON.parse(item.userData);

          return (
            <div className="Appontment-topics" key={index}>
              <div className="Appontment-image-name">
                <img className="Appontment-image" src={userData.image} alt="" />
                <p>{userData.name}</p>
              </div>
              <p>
                {item.slotDate}, {item.slotTime}
              </p>
              <div className="Appontment-image-name-doc">
                <img
                  className="Appontment-image-doc"
                  src={docData.image}
                  alt=""
                />
                <p>{docData.name}</p>
              </div>
              <p>Rs.{docData.fees}</p>
              {item.cancelled ? (
                <p className="cancel">Cancelled</p>
              ) : (
                <img
                  onClick={() => cancelAppointment(item._id)}
                  className="cancel-image"
                  src="/images/cancel_icon.svg"
                  alt=""
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllAppointments;
