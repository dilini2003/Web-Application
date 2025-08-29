import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import "./DoctorAppointments.css";
import "react-toastify/dist/ReactToastify.css";

const DoctorAppointments = () => {
  const {
    dToken,
    appointments,
    getAppointments,
    cancelAppointment,
    completeAppointment,
  } = useContext(DoctorContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);
  return (
    <div className="AllAppointment-page">
      <p className="AllAppointment-title">All Appointment</p>
      <div className="AllAppointment-topics">
        <div className="AllAppointment">
          <img className="Appontmentimag" src="/images/list_icon.png" alt="" />

          <p>Appointments</p>
        </div>
        <div className="AllAppointment-titles">
          <p>patient</p>
          <p>Date & Time</p>
          <p>Actions</p>
        </div>
        {appointments.reverse().map((item, index) => {
          const userData = JSON.parse(item.userData);

          return (
            <div className="Appontment-topics" key={index}>
              <div className="Appontment-image-name">
                <img className="Appontment-image" src={userData.image} alt="" />
                <p className="nameofpatent">{userData.name}</p>
              </div>
              <p className="date-time">
                {item.slotDate}, {item.slotTime}
              </p>
              {item.cancelled && !item.isCompleted && (
                <p className="cancel">Cancelled</p>
              )}
              {!item.cancelled && item.isCompleted && (
                <p className="done">Completed</p>
              )}
              {!item.cancelled && !item.isCompleted && (
                <div className="Appointment-btn">
                  <img
                    onClick={() => cancelAppointment(item._id)}
                    className="cancel-image"
                    src="/images/cancel_icon.svg"
                    alt=""
                  />

                  {item.payment ? (
                    <img
                      onClick={() => completeAppointment(item._id)}
                      className="tick-image"
                      src="/images/tick_icon.svg"
                      alt=""
                    />
                  ) : (
                    <img
                      className="tick-image disabled"
                      src="/images/tick_icon.svg"
                      alt="Not paid"
                      title="Patient hasn't paid yet"
                      style={{ opacity: 0.5, cursor: "not-allowed" }}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorAppointments;
