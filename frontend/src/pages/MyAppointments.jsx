import React, { useState, useEffect, useContext } from "react";
import "./MyAppointments.css";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const MyAppointments = () => {
  const { token, getDoctorsData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);

  const getUserAppointmnets = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/user/appointments",
        { headers: { token } }
      );

      if (data.success) {
        setAppointments(data.Appointments);
        console.log(data.Appointments);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/user/cancel-appointment",
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getUserAppointmnets();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const payAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/user/pay-appointment",
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getUserAppointmnets();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointmnets();
    }
  }, [token]);

  return (
    <div className="my-appointments">
      <h2>My Appointments</h2>

      {appointments.length === 0 ? (
        <p className="no-appointments">No appointments yet.</p>
      ) : (
        appointments.slice().reverse().map((item, index) => {
          const docData = JSON.parse(item.docData);
          return (
            <div className="appointment-card" key={index}>
              <div className="doctor-photo">
                <img src={docData.image} alt="" className="doc-photo" />
              </div>
              <div className="appt-details">
                <h3>{docData.name}</h3>
                <p className="specialty">{docData.speciality}</p>
                <p className="fee">fees: Rs.{docData.fees}</p>
                <p className="datetime">
                  Date & Time: <br />
                  {item.slotDate} | {item.slotTime}
                </p>
              </div>
              <div className="appt-actions">
                {!item.cancelled && !item.payment && (
                  <button
                    onClick={() => payAppointment(item._id)}
                    className="pay-btn"
                  >
                    Pay here
                  </button>
                )}
                {!item.cancelled && !item.payment && (
                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className="cancel-btn"
                  >
                    Cancel appointment
                  </button>
                )}
                {item.cancelled && !item.payment && (
                  <button className="cancelled-btn">
                    Appointment cancelled
                  </button>
                )}
                {item.cancelled && item.payment && (
                  <button className="Return-btn">
                    Return Payment
                  </button>
                )}
                {!item.cancelled && item.payment && (
                  <button className="paid-btn">Paid</button>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MyAppointments;
