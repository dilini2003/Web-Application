import React, { useContext, useState } from "react";
import axios from "axios";
import "./DoctorProfile.css";
import { toast } from "react-toastify";
import { DoctorContext } from "../../context/DoctorContext";

const DoctorProfile = () => {
  const { docData, setDocData, dToken, loadDocProfileData } =
    useContext(DoctorContext);

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);
  const updateDocProfileData = async () => {
    try {
      const formData = new FormData();

      formData.append("name", docData.name);
      formData.append("speciality", docData.speciality);
      formData.append("degree", docData.degree);
      formData.append("experience", docData.experience);
      formData.append("about", docData.about);
      formData.append("fees", Number(docData.fees));
      formData.append("contactNumber", docData.contactNumber);
      formData.append("medicalLicenseNumber", docData.medicalLicenseNumber);

      image && formData.append("image", image);

      const { data } = await axios.post(
        "http://localhost:4000/api/doctor/update-profile",
        formData,
        { headers: { dtoken: dToken } }
      );

      if (data.success) {
        toast.success(data.message);
        await loadDocProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    docData && (
      <div className="Doctor-page">
        <p className="Doctor-title">My Profile</p>
        <div className="profile-page">
          {isEdit ? (
            <label htmlFor="image">
              <div className="upload-image1">
                <img
                  className="upload-image2"
                  src={image ? URL.createObjectURL(image) : docData.image}
                  alt=""
                />
                <img
                  className="upload-image3"
                  src={image ? "" : "/images/upload_area.png"}
                  alt=""
                />
              </div>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="image"
                hidden
              />
            </label>
          ) : (
            <img className="upload-image4" src={docData.image} alt="" />
          )}
          {isEdit ? (
            <input
              className="profile-name-input"
              type="text"
              value={docData.name}
              onChange={(e) =>
                setDocData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <p className="profile-name">{docData.name}</p>
          )}
          <hr className="profile-section-divider" />
          <div className="section-contact-info">
            <p className="profile-section-title">INFORMATION</p>
            <div className="info-group">
              <div className="info-row">
                <p className="info-label">Email id:</p>
                <p className="info-value-blue">{docData.email}</p>
              </div>
              <div className="info-row">
                <p className="info-label">Phone:</p>
                {isEdit ? (
                  <input
                    type="text"
                    className="input-field"
                    value={docData.contactNumber}
                    onChange={(e) =>
                      setDocData((prev) => ({
                        ...prev,
                        contactNumber: e.target.value,
                      }))
                    }
                  />
                ) : (
                  <p className="info-value-blue">{docData.contactNumber}</p>
                )}
              </div>
            </div>
          </div>
          <div className="info-row">
            <p className="info-label">Speciality:</p>
            {isEdit ? (
              <select
                className="input-field"
                onChange={(e) =>
                  setDocData((prev) => ({
                    ...prev,
                    speciality: e.target.value,
                  }))
                }
                value={docData.speciality}
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="ENT Specialist">ENT Specialist</option>
                <option value="Psychiatrist">Psychiatrist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            ) : (
              <p className="info-value">{docData.speciality}</p>
            )}
          </div>
          <div className="info-row">
            <p className="info-label">Education:</p>
            {isEdit ? (
              <input
                type="text"
                className="input-field"
                value={docData.degree}
                onChange={(e) =>
                  setDocData((prev) => ({ ...prev, degree: e.target.value }))
                }
              />
            ) : (
              <p className="info-value-blue">{docData.degree}</p>
            )}
          </div>
          <div className="info-row">
            <p className="info-label">Experience:</p>
            {isEdit ? (
              <select
                className="input-field"
                onChange={(e) =>
                  setDocData((prev) => ({
                    ...prev,
                    experience: e.target.value,
                  }))
                }
                value={docData.experience}
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            ) : (
              <p className="info-value">{docData.experience}</p>
            )}
          </div>
          <div className="info-row">
            <p className="info-label">Medical License Number:</p>
            {isEdit ? (
              <input
                type="text"
                className="input-field"
                value={docData.medicalLicenseNumber}
                onChange={(e) =>
                  setDocData((prev) => ({
                    ...prev,
                    medicalLicenseNumber: e.target.value,
                  }))
                }
              />
            ) : (
              <p className="info-value-blue">{docData.medicalLicenseNumber}</p>
            )}
          </div>
          <div className="info-row">
            <p className="info-label">Fees(Rs):</p>
            {isEdit ? (
              <input
                type="text"
                className="input-field"
                value={docData.fees}
                onChange={(e) =>
                  setDocData((prev) => ({ ...prev, fees: e.target.value }))
                }
              />
            ) : (
              <p className="info-value-blue">{docData.fees}</p>
            )}
          </div>
          <div className="info-row">
            <p className="info-label">About me:</p>
            {isEdit ? (
              <input
                type="text"
                className="input-field"
                value={docData.about}
                onChange={(e) =>
                  setDocData((prev) => ({ ...prev, about: e.target.value }))
                }
              />
            ) : (
              <p className="info-value-blue">{docData.about}</p>
            )}
          </div>

          <div className="action-buttons">
            {isEdit ? (
              <button className="save-button" onClick={updateDocProfileData}>
                Save information
              </button>
            ) : (
              <button className="edit-button" onClick={() => setIsEdit(true)}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
