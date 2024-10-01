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
import Spinner from "../../components/Spinner";
import SearchInput from "../../components/Doctor/SearchInput";
import SearchIcon from '@mui/icons-material/Search';

const LabDashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedForm, setSelectedForm] = useState(1);

  const initialFormData = {
    bloodGroup: "",
    hb: "",
    hiv: "",
    vdrl: "",
    rbs: "",

    pH: "",
    specificGravity: "",
    glucose: "",
    ketones: "",
    nitrites: "",
    leukocyteEsterase: "",

    fhr: "",
    fh: "",
    cefw: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  // const [formData, setFormData] = useState({

  // });

  const handleSelectPatient = (patient) => {
    if (patient.lmp && patient.date_of_birth) {
      const result = calculateGestationalAgeAndTrimester(
        patient.lmp,
        patient.dob
      );
      setSelectedPatient({ ...patient, trimester: result.trimester });
      setFormData(initialFormData);
    } else {
      setSelectedPatient(patient);
    }
  };

  const handleFormChange = (formNumber) => {
    setSelectedForm(formNumber);
  };

  function addOne() {
    setSelectedForm(selectedForm + 1);
  }

  function subOne() {
    setSelectedForm(selectedForm - 1);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        <div className="lab_search-field">
          
        </div>
        <div className="labtech">
          {/* <div className="rounded color_round"></div> */}
          <div className="rounded notification_icon">
            <NotificationsActiveIcon
              style={{ color: "#2b50aa", fontSize: "1.5em" }}
              // #2b50aa
            />
            <div className="notif_num">1</div>
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
              <div className="lab_warning">
                <Spinner />
              </div>
            )}
          </div>
          <div className="bottom">
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
              {selectedForm === 1 && (
                <LabForm1
                  selectedPatient={selectedPatient}
                  addOne={addOne}
                  subOne={subOne}
                  onInputChange={handleInputChange}
                  formData={formData}
                />
              )}
              {selectedForm === 2 && (
                <LabForm2
                  selectedPatient={selectedPatient}
                  addOne={addOne}
                  onInputChange={handleInputChange}
                  subOne={subOne}
                  formData={formData}
                />
              )}
              {selectedForm === 3 && (
                <LabForm3
                  selectedPatient={selectedPatient}
                  addOne={addOne}
                  subOne={subOne}
                  onInputChange={handleInputChange}
                  formData={formData}
                />
              )}
              {selectedForm === 4 && <LabForm1 />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDashboard;
