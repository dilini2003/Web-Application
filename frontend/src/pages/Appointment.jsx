import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Appointment.css";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, token, getDoctorsData } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const navigate = useNavigate();

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };
  const getAvailableSlots = async () => {
    setDocSlots([]);
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      const startTime = new Date(currentDate);
      const endTime = new Date(currentDate);
      startTime.setHours(16, 0, 0, 0);
      endTime.setHours(20, 30, 0, 0);
      let timeSlots = [];
      const slotTime = new Date(startTime);
      while (slotTime <= endTime) {
        // only add future slots for today
        if (!(i === 0 && slotTime <= new Date())) {
          timeSlots.push({
            datetime: new Date(slotTime),
            time: slotTime.toLocaleTimeString([], {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            }),
          });
        }
        slotTime.setMinutes(slotTime.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Login to book appointment");
      return navigate("/login");
    }
    try {
      const date = docSlots[slotIndex][0].datetime;
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      const slotDate = day + "/" + month + "/" + year;
      const { data } = await axios.post(
        "http://localhost:4000/api/user/book-appointment",
        { docId, slotDate, slotTime },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getDoctorsData();
        navigate("/my-appointments");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div className="appointment-container">
        {/* Doctor Details */}
        <div className="doctor-image-box">
          <img src={docInfo.image} alt="" className="doctor-image" />
        </div>

        <div className="doctor-details-wrapper">
          <div className="doctor-content">
            <p className="doctor-name">
              {docInfo.name}
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
                About
                <img
                  src="/images/info_icon.svg"
                  alt="Info"
                  className="info-icon"
                />
              </p>
              <p className="about-text">{docInfo.about}</p>
            </div>

            <p className="fees">
              Appointment fee: <span className="fee">Rs.{docInfo.fees}</span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="booking-section">
          <p className="booking-title">Booking slots</p>

          <div className="booking-days-container">
            {docSlots.length &&
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
            {docSlots.length &&
              docSlots[slotIndex].map((slot, idx) => (
                <button
                  key={idx}
                  className={`slot-btn ${
                    slotTime === slot.time ? "selected" : ""
                  }`}
                  onClick={() => setSlotTime(slot.time)}
                >
                  {slot.time.toLowerCase()}
                </button>
              ))}
          </div>

          <button onClick={bookAppointment} className="book-btn">
            Book an appointment
          </button>
        </div>

        {/* Related Doctors */}
        <div className="related-doctors-section">
          <h2>Related Doctors</h2>
          <p>Simply browse through our extensive list of trusted doctors.</p>
          <div className="related-doctors-grid">
            {doctors
              .filter(
                (d) =>
                  d.speciality === docInfo.speciality && d._id !== docInfo._id
              )
              .slice(0, 4)
              .map((d) => (
                <button
                  className="related-doctor-card"
                  key={d._id}
                  onClick={() => {
                    navigate(`/appointment/${d._id}`, { state: { doctor: d } });
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
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
    )
  );
};

export default Appointment;
