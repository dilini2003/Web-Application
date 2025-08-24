import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { doctors } from "../components/doctors";
import "./Appointment.css";

const Appointment = () => {
  const { docId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  // Generate slots
  const getAvailableSlots = () => {
    let today = new Date();
    let allSlots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(13, 0, 0, 0); // till 1 PM for demo
      currentDate.setHours(8, 0, 0, 0);

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(timeSlots);
    }

    setDocSlots(allSlots);
  };

  useEffect(() => {
  const foundDoc =
    location.state?.doctor || doctors.find((doc) => doc._id === docId);

  setDocInfo(foundDoc);

  setSlotIndex(0);
  setSlotTime("");
  getAvailableSlots();

  window.scrollTo({ top: 0, behavior: "smooth" });
}, [docId, location.state]);


  if (!docInfo) return <p>Loading...</p>;

  return (
    <div className="appointment-container">
      {/* Doctor Details */}
      <div className="doctor-image-box">
        <img src={docInfo.image} alt="" className="doctor-image" />
      </div>

      <div className="doctor-details-wrapper">
        <div className="doctor-content">
          <p className="doctor-name">
            {docInfo.name}{" "}
            <img
              src="/images/verified_icon.svg"
              alt="Verified"
              className="verified-icon"
            />
          </p>

          <div className="doctor-meta">
            <p className="doctor-degree">
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button className="doctor-experience">
              {docInfo.experience}
            </button>
          </div>

          <div className="doctor-about-section">
            <p className="about-title">
              About{" "}
              <img
                src="/images/info_icon.svg"
                alt="Info"
                className="info-icon"
              />
            </p>
            <p className="about-text">{docInfo.about}</p>
          </div>

          <p className="fees">
            Appointment fee:{" "}
            <span className="fee">Rs.{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="booking-section">
        <p className="booking-title">Booking slots</p>

        <div className="booking-days-container">
          {docSlots.length > 0 &&
            docSlots.map((item, index) => (
              <div
                key={index}
                className={`booking-day-card ${
                  slotIndex === index ? "active" : ""
                }`}
                onClick={() => setSlotIndex(index)}
              >
                <p className="booking-day-name">
                  {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                </p>
                <p className="booking-day-date">
                  {item[0] && item[0].datetime.getDate()}
                </p>
              </div>
            ))}
        </div>

        <div className="booking-times-container">
          {docSlots[slotIndex] &&
            docSlots[slotIndex].map((slot, idx) => (
              <button
                key={idx}
                className={`slot-btn ${
                  slotTime === slot.time ? "selected" : ""
                }`}
                onClick={() => setSlotTime(slot.time)}
              >
                {slot.time}
              </button>
            ))}
        </div>

        <button className="book-btn">Book an appointment</button>
      </div>

      {/* Related Doctors */}
      <div className="related-doctors-section">
        <h2>Related Doctors</h2>
        <p>
          Simply browse through our extensive list of trusted doctors.
        </p>
        <div className="related-doctors-grid">
          {doctors
            .filter(
              (d) => d.speciality === docInfo.speciality && d._id !== docInfo._id
            )
            .slice(0, 4)
            .map((d) => (
              <button
                className="related-doctor-card"
                key={d._id}
                onClick={() =>
                  navigate(`/appointment/${d._id}`, { state: { doctor: d } })
                }
              >
                <div className="image-box">
                  <img src={d.image} alt={d.name} />
                </div>
                <div className="doctor-info">
                  <div className="doctor-status">
                    <p className="status-label"></p>
                    <p>Available</p>
                  </div>
                  <p className="doctor-name">{d.name}</p>
                  <p className="doctor-speciality">{d.speciality}</p>
                </div>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
