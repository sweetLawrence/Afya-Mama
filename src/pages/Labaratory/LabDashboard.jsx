import React, { useEffect, useState } from "react";
import AfyaMamaLogo from "../../assets/images/afyamama.png";
import Person from "../../assets/images/profile2.jpeg";
import "../../styles/lab-dashboard.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AdmittedPatients from "../../components/Doctor/AdmittedPatients";
import LabCard from "../../components/Lab/LabCard";
import Labform from "../../components/Lab/LabForm1";
import LabForm1 from "../../components/Lab/LabForm1";
import LabForm2 from "../../components/Lab/LabForm2";
import LabPatients from "../../components/Doctor/LabPatients";
import calculateGestationalAgeAndTrimester from "../../utils/calculate";
import LabForm3 from "../../components/Lab/LabForm3";

const LabDashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedForm, setSelectedForm] = useState(1);

  const handleSelectPatient = (patient) => {
    if (patient.lmp && patient.date_of_birth) {
      const result = calculateGestationalAgeAndTrimester(
        patient.lmp,
        patient.dob
      );
      setSelectedPatient({ ...patient, trimester: result.trimester });
    } else {
      setSelectedPatient(patient);
    }
  };

  const handleFormChange = (formNumber) => {
    setSelectedForm(formNumber);
  };

  return (
    <div className="lab-dashboard">
      <div className="header-section">
        <div className="logo">
          <img src={AfyaMamaLogo} alt="Afya Mama Logo" />
          <div className="title">
            <div className="title_name">Afya Mama</div>
            <div className="department">Lab MIS</div>
          </div>
        </div>

        <div className="labtech">
          {/* <div className="rounded color_round"></div> */}
          <div className="rounded notification_icon">
            <NotificationsActiveIcon
              style={{ color: "#2b50aa", fontSize: "1.5em" }}
              // #2b50aa
            />
          </div>
          <div className="rounded dp-div">
            <img src={Person} alt="The Lab Technician's Name" />
          </div>
        </div>
      </div>

      <div className="main_section">
        <div className="patient_list">
          <LabPatients onSelectPatient={handleSelectPatient} />
        </div>
        <div className="right_section">
          <div className="top">
            {/* <LabCard upper={"Trimester"} value={"3rd"} />
            <LabCard upper={"EDD"} value={"01/08/2024"} />
            <LabCard upper={"HIV Status"} value={"Non-Reactive"} /> */}
            {selectedPatient ? (
              <>
                <LabCard
                  upper={"Trimester"}
                  value={selectedPatient.trimester || "N/A"}
                />
                <LabCard upper={"EDD"} value={selectedPatient.edd || "N/A"} />
                <LabCard
                  upper={"HIV Status"}
                  value={selectedPatient.hiv_status || "N/A"}
                />
              </>
            ) : (
              <div>Select a patient to view details</div>
            )}
          </div>
          <div className="bottom">
            {/* <div className="progress_bar"></div> */}
            {/* <div className="navigations">
              <div className="nav-item active">1. Blood Tests </div>
              <div className="nav-item">2. Urinalysis</div>
              <div className="nav-item">3. Infectious Disease Screening</div>
              <div className="nav-item">4. Fetal Health Monitoring</div> 
            </div>
            <div className="forms">
              <LabForm1 />
            </div> */}

            <div className="navigations">
              <div
                className={`nav-item ${selectedForm === 1 ? "active" : ""}`}
                onClick={() => handleFormChange(1)}
              >
                1. Blood Tests
              </div>
              <div
                className={`nav-item ${selectedForm === 2 ? "active" : ""}`}
                onClick={() => handleFormChange(2)}
              >
                2. Urinalysis
              </div>
              <div
                className={`nav-item ${selectedForm === 3 ? "active" : ""}`}
                onClick={() => handleFormChange(3)}
              >
                3. Fetal Health Monitoring
              </div>
              <div
                className={`nav-item ${selectedForm === 4 ? "active" : ""}`}
                onClick={() => handleFormChange(4)}
              >
                4. Infectious Disease Screening
              </div>
            </div>

            <div className="forms">
              {selectedForm === 1 && <LabForm1 />}
              {selectedForm === 2 && <LabForm2 />}
              {selectedForm === 3 && <LabForm3 selectedPatient={selectedPatient} />}
              {/* {selectedForm === 4 && <LabForm4 />} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDashboard;
