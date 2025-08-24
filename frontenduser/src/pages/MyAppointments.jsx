import React, { useState, useEffect } from "react";
import "./MyAppointments.css";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Example data (later you can fetch from backend)
    const data = [
      {
        id: 1,
        doctorName: "Dr. Richard James",
        specialty: "General physician",
        fee: 2500,
        date: "25 July, 2024",
        time: "8:30 PM",
        photo: "/images/doc4.jpeg",
        paid: false,
      },
      {
        id: 2,
        doctorName: "Dr. Shalini Rajapaksha",
        specialty: "General physician",
        fee: 2500,
        date: "30 July, 2024",
        time: "9:30 PM",
        photo: "/images/doc2.jpeg",
        paid: false,
      },
    ];
    setAppointments(data);
  }, []);

  const handleCancel = (id) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this appointment?");
    if (confirmCancel) {
      setAppointments((prev) => prev.filter((appt) => appt.id !== id));
    }
  };

  const handlePayment = (id) => {
    const confirmPay = window.confirm("Do you want to proceed with the payment?");
    if (confirmPay) {
      setAppointments((prev) =>
        prev.map((appt) =>
          appt.id === id ? { ...appt, paid: true } : appt
        )
      );
      alert("Payment successful!");
    }
  };

  return (
    <div className="my-appointments">
      <h2>My Appointments</h2>

      {appointments.length === 0 ? (
        <p className="no-appointments">No appointments yet.</p>
      ) : (
        appointments.map((appt) => (
          <div className="appointment-card" key={appt.id}>
            <div className="doctor-photo">
              <img src={appt.photo} alt={appt.doctorName} className="doc-photo" />
            </div>
            <div className="appt-details">
              <h3>{appt.doctorName}</h3>
              <p className="specialty">{appt.specialty}</p>
              <p className="fee">fee: Rs.{appt.fee}</p>
              <p className="datetime">
                Date & Time: <br/>{appt.date} | {appt.time}
              </p>
            </div>
            <div className="appt-actions">
              {appt.paid ? (
                <span className="paid-label">Paid</span>
              ) : (
                <>
                  <button className="pay-btn" onClick={() => handlePayment(appt.id)}>
                    Pay here
                  </button>
                  <button className="cancel-btn" onClick={() => handleCancel(appt.id)}>
                    Cancel appointment
                  </button>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyAppointments;
