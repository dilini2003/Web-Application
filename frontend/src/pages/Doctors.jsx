import React, { useContext, useState, useEffect } from "react";
import "./Doctors.css";
import Footer from "../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";


const Doctors = () => {
  const { doctors } = useContext(AppContext);
  const {speciality} = useParams()
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const applyFilter = ()=> {
    if(speciality) {
      setFilterDoc(doctors.filter(doc =>doc.speciality === speciality && doc.available))
    }else {
      setFilterDoc(doctors.filter(doc =>doc.available))
    }
  }

  useEffect(()=> {
    applyFilter()
  },[doctors, speciality])
  // useEffect(() => {
  //   if (doctors.length > 0) {
  //     setFilteredDoctors(doctors);
  //   }
  // }, [doctors]);
  // const handleFilter = (speciality) => {
  //   const filtered = doctors.filter((doc) => doc.speciality === speciality);
  //   setFilteredDoctors(filtered);
  // };
  return (
    <div className="doctors">
      <div className="doctors-header">
        <p className="title">ALL DOCTORS</p>
      </div>
      <div className="speciality-section" id="speciality">
        <h1 className="speciality-title">Find by Speciality</h1>
        <p className="speciality-description">
          Simply browse through our extensive list of trusted doctors, schedule
          <br /> your appointment hassle-free.
        </p>
        <div className="specialities">
            <Link
              className="speciality-card" to='/doctors/General physician'
              
            >
              <img className="speciality-img" src="./images/General_physician.svg" alt="" />
              <p className="specialityname">General physician</p>
            </Link>
            <Link
              className="speciality-card" to='/doctors/Gynecologist'
              
            >
              <img className="speciality-img" src="./images/Gynecologist.svg" alt="" />
              <p className="specialityname">Gynecologist</p>
            </Link>
            <Link
              className="speciality-card"
              to='/doctors/Dermatologist'
              
            >
              <img className="speciality-img" src="./images/Dermatologist.svg" alt="" />
              <p className="specialityname">Dermatologist</p>
            </Link>
            <Link
              className="speciality-card"
              to='/doctors/Pediatricians'
              
            >
              <img className="speciality-img" src="./images/Pediatricians.svg" alt="" />
              <p className="specialityname">Pediatricians</p>
            </Link>
            <Link
              className="speciality-card"
              to='/doctors/Neurologist'
              
            >
              <img className="speciality-img" src="./images/Neurologist.svg" alt="" />
              <p className="specialityname">Neurologist</p>
            </Link>
            <Link
              className="speciality-card"
              to='/doctors/Gastroenterologist'
              
            >
              <img className="speciality-img" src="./images/Gastroenterologist.svg" alt="" />
              <p className="specialityname">Gastroenterologist</p>
            </Link>
            <Link
              className="speciality-card"
              to='/doctors/ENT Specialist'
              
            >
              <img className="speciality-img" src="./images/ENT_specialist.png" alt="" />
              <p className="specialityname">ENT Specialist</p>
            </Link>
            <Link
              className="speciality-card"
              to='/doctors/Psychiatrist'
              
            >
              <img className="speciality-img" src="./images/Psychiatrist.png" alt="" />
              <p className="specialityname">Psychiatrist</p>
            </Link>
        </div>
        <div className="doctor-section">
          <h1 className="doctor-title">Doctors to Book</h1>
          <p className="doctor-subtitle">
            Simply browse through our extensive list of trusted doctors.
          </p>
          <div className="doctor-grid">
            {filterDoc.map((item) => (
              <div key={item._id} className="doctor-card">
                <div className="image-box">
                  <img src={item.image} alt="" className="doctor-image" />
                </div>
                <div className="doctor-info">
                  <div className="doctor-status">
                    <p className="status-label"></p>
                    <p>Available</p>
                  </div>
                  <p className="doctor-name">{item.name}</p>
                  <p className="doctor-speciality">{item.speciality}</p>
                  <button
                    onClick={() =>
                      navigate(`/appointment/${item._id}`, {
                        state: { doctor: item },
                      })
                    }
                    className="button_book"
                  >
                    Book Now
                  </button>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Footer />{" "}
    </div>
  );
};
export default Doctors;
