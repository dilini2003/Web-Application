import React from 'react';
import './Doctors.css';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { doctors } from '../components/doctors';

const specialityData = [
    {
      id:1,
        speciality: 'General physician',
        image: "./images/General_physician.svg"
    },
    {
        id:2,
        speciality: 'Gynecologist',
        image: "./images/Gynecologist.svg"
    },
    {
        id:3,
        speciality: 'Dermatologist',
        image: "./images/Dermatologist.svg"
    },
    {
        id:4,
        speciality: 'Pediatricians',
        image: "./images/Pediatricians.svg"
    },
    {
        id:5,
        speciality: 'Neurologist',
        image: "./images/Neurologist.svg"
    },
    {
        id:6,
        speciality: 'Gastroenterologist',
        image: "./images/Gastroenterologist.svg"
    },
    {
        id:7,
        speciality: 'ENT Specialist',
        image: "./images/ENT_specialist.png"
    },
    {
        id:8,
        speciality: 'Psychiatrist',
        image: "./images/Psychiatrist.png"
    },
];

const Doctors = () => {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleFilter = (speciality) => {
    const filtered = doctors.filter(doc => doc.speciality === speciality);
    setFilteredDoctors(filtered);
  };

    const navigate = useNavigate()
  return (
    <div className="doctors">
      <div className="doctors-header">
        <p className="title">ALL DOCTORS</p>
      </div>

      <div className="doctor-search">
        <p className="search-title">Find A Doctor</p>
        <div className="search-box">
          <div className="input-field">
            <p>Name</p>
          </div>
          <button className="search-button">Search</button>
        </div>
      </div>

      <div className="speciality-section" id='speciality'>
        <h1 className="speciality-title">Find by Speciality</h1>
        <p className="speciality-description">
          Simply browse through our extensive list of trusted doctors, schedule <br />
          your appointment hassle-free.
        </p>
        
        <div className='specialities'>
        {specialityData.map((item) => (
          <div className='speciality-card' key={item.id} onClick={() => handleFilter(item.speciality)}>
            <img className="speciality-img" src={item.image} alt='' />
            <p>{item.speciality}</p>
          </div>
        ))}
      </div>

        <div className="doctor-section">
  <h1 className="doctor-title">Doctors to Book</h1>
  <p className="doctor-subtitle">Simply browse through our extensive list of trusted doctors.</p>

  <div className="doctor-grid">
        {filteredDoctors.slice(0, 10).map((item, index) => (
          <div key={index} className="doctor-card">
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
              <button onClick={() => navigate(`/appointment/${item._id}`, { state: { doctor: item } })} className='button_book'>  Book Now</button>
            </div>
          </div>
        ))}
        </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Doctors;
