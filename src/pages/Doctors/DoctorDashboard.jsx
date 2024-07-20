import React, { useState } from "react";
import "../../styles/doctor.css";
import PROFILE from "../../assets/images/afyamama.png";
import SearchInput from "../../components/Doctor/SearchInput";
import DOCTOR from "../../assets/images/profile.png";
import PatientDetails from "../../components/Doctor/PatientDetails";
import MaternalProfile from "../../components/Doctor/MaternalProfile";
import LabResults from "../../components/Doctor/LabResults";
import DirectTests from "../../components/Doctor/DirectTests/DirectTests";
import AdmittedPatients from "../../components/Doctor/AdmittedPatients";

const DoctorDashboard = () => {
    const [selectedPatient, setSelectedPatient] = useState(null);

    const handleSelectPatient = (patient) => {
      setSelectedPatient(patient);
    };
  return (
    <div className="doctor-dashboard">
      {/* top navigation */}
      <div className="doctor-nav">
        <div className="logo">
          <img src={PROFILE} alt="afyamama logo" />
          <p>Afya Mama</p>
        </div>

        <div className="search-field">
          <SearchInput />
        </div>

        <div className="doctor-profile">
          <div className="img-container">
            <img src={DOCTOR} alt="doctor's image" />
          </div>
          <p>Dr. Lawrence Tsungu</p>
        </div>
      </div>

      {/* Actual section */}
      <div className="actual-section">
        <div className="main-section">
          <div className="left">
            {/* <PatientDetails /> */}
            <PatientDetails patient={selectedPatient} />
            <LabResults />
          </div>
          <div className="right">
            <MaternalProfile patient={selectedPatient} />
            <DirectTests patient={selectedPatient}/>
          </div>

          {/* <MaternalProfile /> */}
        </div>
        <div className="admitted-patients-section">
            {/* <AdmittedPatients /> */}
            <AdmittedPatients onSelectPatient={handleSelectPatient} />
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
