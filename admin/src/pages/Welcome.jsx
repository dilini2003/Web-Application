import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";

const Welcome = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return (
    <div style={{  marginLeft:"6rem",marginTop:"-33rem", padding: "2rem", textAlign: "center" }}>
      <h1>Welcome {aToken ? "Admin" : dToken ? "Doctor" : ""}!</h1>
      <p>Select an option from the sidebar to get started.</p>
    </div>
  );
};

export default Welcome;
