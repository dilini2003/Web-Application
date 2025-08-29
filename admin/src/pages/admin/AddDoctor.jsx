import React, { useContext, useState } from "react";
import "./AddDoctor.css";
import { toast } from "react-toastify";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [medicalLicenseNumber, setMedicalLicenseNumber] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [about, setAbout] = useState("");

  // Get backend URL + admin token from AdminContext
  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // prevent refresh
    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }

      const formData = new FormData();

      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append("medicalLicenseNumber", medicalLicenseNumber);
      formData.append("contactNumber", contactNumber);
      formData.append("about", about);

      //debug
      formData.forEach((value, key) => {
        console.log(`${key} : ${value}`);
      });

      // API request to backend for adding doctor
      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { "Content-Type": "multipart/form-data", aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        //reset after success
        setDocImg(false);
        setName("");
        setEmail("");
        setPassword("");
        setFees("");
        setDegree("");
        setMedicalLicenseNumber("");
        setContactNumber("");
        setAbout("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="add-doctor-form">
      <p className="form-title">Add Doctor</p>
      <div className="form-section">
        <div className="upload-section">
          <label htmlFor="doc-img">
            <img
              className="upload-icon"
              src={
                docImg ? URL.createObjectURL(docImg) : "/images/upload_area.png"
              }
              alt=""
            />
            <input
              onChange={(e) => setDocImg(e.target.files[0])}
              type="file"
              id="doc-img"
              hidden
            />
          </label>
          <p>
            Upload doctor <br /> picture
          </p>
        </div>
        <div className="form-columns">
          <div className="form-column">
            <div className="form-group">
              <p>Doctor name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="form-input"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <p>Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="form-input"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <p>Doctor Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="form-input"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <p>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="form-input"
                name=""
                id=""
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
            </div>
            <div className="form-group">
              <p>Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="form-input"
                type="number"
                placeholder="fees"
                required
              />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <p>Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="form-input"
                name=""
                id=""
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
            </div>
            <div className="form-group">
              <p>Education</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="form-input"
                type="text"
                placeholder="Education"
                required
              />
            </div>
            <div className="form-group">
              <p>Medical License Number</p>
              <input
                onChange={(e) => setMedicalLicenseNumber(e.target.value)}
                value={medicalLicenseNumber}
                className="form-input"
                type="text"
                placeholder="Medical License Number"
                required
              />
            </div>
            <div className="form-group">
              <p>Contact Number</p>
              <input
                onChange={(e) => setContactNumber(e.target.value)}
                value={contactNumber}
                className="form-input"
                type="text"
                placeholder="Contact Number"
                required
              />
            </div>
          </div>
        </div>
        <div>
          <p className="form-label">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="form-textarea"
            placeholder="write about yourself"
            rows={5}
            required
          />
        </div>
        <button type="submit" className="form-button">
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
