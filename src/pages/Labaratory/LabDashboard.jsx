// import React, { Profiler } from "react";
// import AfyaMamaLogo from "../../assets/images/afyamama.png";
// import Person from "../../assets/images/profile2.jpeg";
// import "../../styles/lab-dashboard.css";
// import LabPatientsTable from "../../components/Lab/LabPatientsTable";
// import LabTestInputSection from "../../components/Lab/LabTestInputSection";
// import { FaExpand } from "react-icons/fa";

// const LabDashboard = () => {
//     const handleFullScreenToggle = () => {
//         const bottomSection = document.querySelector('.bottom-section');
//         if (bottomSection) {
//           if (!document.fullscreenElement) {
//             bottomSection.requestFullscreen();
//           } else {
//             document.exitFullscreen();
//           }
//         }
//       };

//   return (
//     <div className="lab-dashboard">
//       <div className="header-section">
//         <div className="logo">
//           <img src={AfyaMamaLogo} alt="Afya Mama Logo" />
//           <p className="title">Afya Mama</p>
//         </div>
//         <div className="date">
//           <h3>2004-01-01</h3>
//         </div>
//         <div className="labtech">
//           <div className="dp-div">
//             <img src={Person} alt="The Lab Technician's Name" />
//           </div>

//           <h3 className="name">Lawrence Tsungu</h3>
//         </div>
//       </div>

//       <div className="body-section">
//         <div className="patient-list">
//           <div className="upper-section">
//             <LabPatientsTable />
//           </div>
//           <div className="bottom-section">
//           <div className="lab-test-input-section">
//               <div className="fullscreen-button" onClick={handleFullScreenToggle}>
//                 <FaExpand/>
//               </div>
//               <LabTestInputSection trimester={3} />
//             </div>
//             {/* <LabTestInputSection trimester={3} /> */}
//           </div>
//         </div>
//         <div className="patient-profile">
//           {/* HEADER */}
//           <div className="header">
//             <div className="dp-div">
//               <img src={Person} alt="Patient's profile picture" />
//             </div>

//             <div className="patient-dets">
//               <h4>Maggie Swayer</h4>
//               <div className="patientID">xy12#gFznet</div>
//             </div>
//           </div>

//           {/* CONTACT */}
//           <div className="contact">
//             <div className=" item email">
//               <div className="item-title">Email</div>
//               <div className="item-value">tsungula@k.com</div>
//             </div>
//             <div className=" item phone">
//               <div className="item-title">Cell Phone</div>
//               <div className="item-value">0712345567</div>
//             </div>
//             <div className=" item address">
//               <div className="item-title">Address</div>
//               <div className="item-value">123,Bitch Street</div>
//             </div>
//             <div className=" item emergency">
//               <div className="item-title">Emergency Contact</div>
//               <div className="item-value">0167284893</div>
//             </div>
//           </div>

//           {/* PERSONAL */}

//           <div className="personal">
//             <div className=" item email">
//               <div className="item-title">Birth Date</div>
//               <div className="item-value">10/03/2005</div>
//             </div>
//             <div className=" item address">
//               <div className="item-title">Weight</div>
//               <div className="item-value">100 kg</div>
//             </div>
//             <div className=" item emergency">
//               <div className="item-title">Height</div>
//               <div className="item-value">5.11</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LabDashboard;

import React, { useState } from "react";
import AfyaMamaLogo from "../../assets/images/afyamama.png";
import Person from "../../assets/images/profile2.jpeg";
import "../../styles/lab-dashboard.css";
import LabPatientsTable from "../../components/Lab/LabPatientsTable";
import LabTestInputSection from "../../components/Lab/LabTestInputSection";

const LabDashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  function closeSec(){
    setSelectedPatient(null)
  }

  return (
    <div className="lab-dashboard">
      <div className="header-section">
        <div className="logo">
          <img src={AfyaMamaLogo} alt="Afya Mama Logo" />
          <p className="title">Afya Mama</p>
        </div>
        <div className="date">
          <h3>2004-01-01</h3>
        </div>
        <div className="labtech">
          <div className="dp-div">
            <img src={Person} alt="The Lab Technician's Name" />
          </div>
          <h3 className="name">Lawrence Tsungu</h3>
        </div>
      </div>

      <div className="body-section">
        <div className="patient-list">
          <div className="upper-section">
            <LabPatientsTable onSelectPatient={handlePatientClick} />
          </div>
          <div className="bottom-section"></div>
        </div>
        <div className="patient-profile">
          {/* HEADER */}
          <div className="header">
            <div className="dp-div">
              <img src={Person} alt="Patient's profile picture" />
            </div>
            <div className="patient-dets">
              <h4>
                {selectedPatient ? selectedPatient.name : "Select a Patient"}
              </h4>
              <div className="patientID">
                {selectedPatient ? selectedPatient.id : ""}
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="contact">
            <div className="item email">
              <div className="item-title">Email</div>
              <div className="item-value">
                {selectedPatient ? selectedPatient.email : ""}
              </div>
            </div>
            <div className="item phone">
              <div className="item-title">Cell Phone</div>
              <div className="item-value">
                {selectedPatient ? selectedPatient.phone : ""}
              </div>
            </div>
            <div className="item address">
              <div className="item-title">Address</div>
              <div className="item-value">
                {selectedPatient ? selectedPatient.address : ""}
              </div>
            </div>
            <div className="item emergency">
              <div className="item-title">Emergency Contact</div>
              <div className="item-value">
                {selectedPatient ? selectedPatient.emergencyContact : ""}
              </div>
            </div>
          </div>

          {/* PERSONAL */}
          <div className="personal">
            <div className="item email">
              <div className="item-title">Birth Date</div>
              <div className="item-value">
                {selectedPatient ? selectedPatient.birthDate : ""}
              </div>
            </div>
            <div className="item address">
              <div className="item-title">Weight</div>
              <div className="item-value">
                {selectedPatient ? selectedPatient.weight : ""}
              </div>
            </div>
            <div className="item emergency">
              <div className="item-title">Height</div>
              <div className="item-value">
                {selectedPatient ? selectedPatient.height : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedPatient && (
        // <div className="lab-test-input-section">
          <LabTestInputSection trimester={3}  closeSec={closeSec}/>
        // </div>
      )}
    </div>
  );
};

export default LabDashboard;
