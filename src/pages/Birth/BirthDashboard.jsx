import "../../styles/birth.css";
import AfyaMamaLogo from "../../assets/images/afyamama.png";
import Person from "../../assets/images/profile2.jpeg";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import BirthForm from "../../components/Birth/BirthForm";
import { birth_nav } from "../../utils/navdata";
import LabPatients from "../../components/Doctor/LabPatients";
import BirthPatients from "../../components/Birth/BirthPatients";
import { useState } from "react";

const BirthDashboard = () => {
  const [selectedNav, setSelectedNav] = useState(birth_nav[0]);
  const [selectedPatient, setSelectedPatient] = useState();

  const initialFormData = {
    patientId:selectedPatient?.id,
    motherName: "",
    birthWeight: "",
    apgarScore: "",
    deliveryMethod: "",
    deliveryDate: "",
    birthComplications: "",
  };

  const [formData, setFormData] = useState(initialFormData);

//   const handleSelectPatient = (patient) => {
//     setSelectedPatient(patient);
//     setFormData(initialFormData);
//   };
const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    setFormData(initialFormData);
    setFormData((prev) => ({
      ...prev,
      patientId: patient.id, 
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNavClick = (item) => {
    setSelectedNav(item);
  };
  return (
    <div className="birth">
      <div className="header-section">
        <div className="logo">
          <img src={AfyaMamaLogo} alt="Afya Mama Logo" />
          <div className="title">
            <div className="title_name">Afya Mama</div>
            <div className="department">Childbirth</div>
          </div>
        </div>
        <div className="lab_search-field"></div>
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
          <BirthPatients onSelectPatient={handleSelectPatient} />
        </div>
        <div className="right_section">
          <div className="top">
            <div className="birth_card">
              <div className="upper">HIV Status</div>
              <div className="value">{selectedPatient?.hiv_status || "Null"}</div>
            </div>
          </div>
          <div className="bottom">
            <div className="navigations">
              {birth_nav.map((item, index) => (
                <div
                  key={index}
                  className={`nav-item ${selectedNav === item ? "active" : ""}`}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="forms">
              {/* <BirthForm heading={selectedNav} /> */}
              {selectedPatient ? (
                <BirthForm
                  heading={selectedNav}
                  formData={formData}
                  onInputChange={handleInputChange}
                  selectedPatient={selectedPatient}
                />
              ) : (
                <div>Please select a patient to view birth details.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthDashboard;
